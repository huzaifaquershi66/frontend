import { useEffect, useState, useRef } from "react";
import DerivAPIBasic from "https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic";

const app_id = 1089; // Replace with your app_id or leave as 1089 for testing.
const connection = new WebSocket(
  `wss://ws.derivws.com/websockets/v3?app_id=${app_id}`
);

const useCandlestickData = (symbol, aggregationTime = 5) => {
  const api = new DerivAPIBasic({ connection });

  const tickStream = () => api.subscribe({ ticks: symbol });
  const [candlestickData, setCandlestickData] = useState([]);
  const [currentPriceDirection, setCurrentPriceDirection] = useState(null);
  const tickBufferRef = useRef([]);
  const lastCandleCloseRef = useRef(null);

  useEffect(() => {
    const tickResponse = async (res) => {
      const data = JSON.parse(res.data);
      if (data.error !== undefined) {
        console.log("Error candlde stick: ", data.error.message);
        connection.removeEventListener("message", tickResponse, false);
        await api.disconnect();
        return;
      }

      if (data.msg_type === "tick") {
        updateTickBuffer(data.tick);
      }
    };

    const updateTickBuffer = (tick) => {
      const tickEpoch =
        Math.floor(tick.epoch / aggregationTime) * aggregationTime;

      tickBufferRef.current = [...tickBufferRef.current];

      if (
        tickBufferRef.current.length === 0 ||
        tickBufferRef.current[0].time !== tickEpoch
      ) {
        if (tickBufferRef.current.length > 0) {
          const newCandle = aggregateCandlestickData(tickBufferRef.current);
          updateCandleData(newCandle);
        }
        tickBufferRef.current = [{ time: tickEpoch, ...tick }];
      } else {
        tickBufferRef.current.push({ time: tickEpoch, ...tick });
      }
    };

    const aggregateCandlestickData = (buffer) => {
      const open = buffer[0].quote;
      const close = buffer[buffer.length - 1].quote;
      const high = Math.max(...buffer.map((tick) => tick.quote));
      const low = Math.min(...buffer.map((tick) => tick.quote));

      return {
        time: buffer[0].time,
        open,
        high,
        low,
        close,
      };
    };

    const updateCandleData = (newCandle) => {
      setCandlestickData((prevData) => {
        const updatedData = [...prevData, newCandle];

        if (updatedData.length > 100) {
          updatedData.shift();
        }

        return updatedData;
      });

      if (lastCandleCloseRef.current !== null) {
        setCurrentPriceDirection(
          newCandle.close > lastCandleCloseRef.current ? "higher" : "lower"
        );
      }

      lastCandleCloseRef.current = newCandle.close;
    };

    const subscribeTicks = async () => {
      await tickStream();
      connection.addEventListener("message", tickResponse);
    };

    const unsubscribeTicks = () => {
      connection.removeEventListener("message", tickResponse);
      tickStream().unsubscribe();
    };

    subscribeTicks();
    return () => {
      unsubscribeTicks();
    };
  }, [symbol, aggregationTime]);

  return { candlestickData, currentPriceDirection };
};

export default useCandlestickData;
