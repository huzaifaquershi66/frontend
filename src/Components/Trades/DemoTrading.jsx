// import React, { useEffect, useRef, memo } from "react";
// import { useParams } from "react-router-dom";
// import { createChart } from "lightweight-charts";
// import DemoTradeSideBar from "../TradingSideBar/DemoTradeSideBar";
// import useCandlestickData from "../../hooks/useCandlestickData";
// import useDemoTrade from "../../hooks/useDemoTrade";
// import { toast } from "react-toastify";

// const DemoTrading = () => {
//   // const { symbol } = useParams();
//   // const { candlestickData } = useCandlestickData(symbol, 5);
//   // const {
//   //   demoBalance,
//   //   stake,
//   //   setStake,
//   //   selectedMultiplier,
//   //   setSelectedMultiplier,
//   //   currentPrice,
//   //   handleBuyIn,
//   //   handleBuyOut,
//   // } = useDemoTrade(symbol, candlestickData);

//   // const chartRef = useRef(null);
//   // const [movingAverageData, setMovingAverageData] = useState([]);
//   // const [bollingerBands, setBollingerBands] = useState({
//   //   upperBandData: [],
//   //   lowerBandData: [],
//   // });

//   // useEffect(() => {
//   //   toast.info("Demo trading YAY");
//   // }, []);

//   // useEffect(() => {
//   //   if (candlestickData.length > 0) {
//   //     const maData = calculateMovingAverage(candlestickData, 10); // 10-period MA
//   //     const { upperBandData, lowerBandData } =
//   //       calculateBollingerBands(candlestickData);

//   //     setMovingAverageData(maData);
//   //     setBollingerBands({ upperBandData, lowerBandData });
//   //   }
//   // }, [candlestickData]);

//   // useEffect(() => {
//   //   const chart = createChart(chartRef.current, {
//   //     layout: {
//   //       textColor: "black",
//   //       background: { type: "solid", color: "white" },
//   //     },
//   //   });

//   //   const candlestickSeries = chart.addCandlestickSeries({
//   //     upColor: "#26a69a",
//   //     downColor: "#ef5350",
//   //     borderVisible: false,
//   //     wickUpColor: "#26a69a",
//   //     wickDownColor: "#ef5350",
//   //   });
//   //   candlestickSeries.setData(candlestickData);

//   //   const movingAverageSeries = chart.addLineSeries({
//   //     color: "blue",
//   //     lineWidth: 2,
//   //   });
//   //   movingAverageSeries.setData(movingAverageData);

//   //   const upperBandSeries = chart.addLineSeries({
//   //     color: "green",
//   //     lineWidth: 1,
//   //   });
//   //   upperBandSeries.setData(bollingerBands.upperBandData);

//   //   const lowerBandSeries = chart.addLineSeries({
//   //     color: "red",
//   //     lineWidth: 1,
//   //   });
//   //   lowerBandSeries.setData(bollingerBands.lowerBandData);

//   //   chart.timeScale().fitContent();

//   //   return () => {
//   //     chart.remove();
//   //   };
//   // }, [candlestickData, movingAverageData, bollingerBands]);
//   const container = useRef();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//         {
//           "width": "100vw",
//           "height": "80vh",
//           "symbol": "NASDAQ:AAPL",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "light",
//           "style": "1",
//           "locale": "en",
//           "allow_symbol_change": true,
//           "calendar": false,
//           "support_host": "https://www.tradingview.com"
//         }`;
//     container.current.appendChild(script);
//   }, []);
//   return (
//     // <div className="flex">
//     //   <div style={{ width: "1180px", height: "500px" }} className="mt-3">
//     //     <div ref={chartRef} style={{ width: "100%", height: "100%" }}></div>
//     //   </div>
//     //   <div className="w-80">
//     //     <DemoTradeSideBar
//     //       buyIn={handleBuyIn}
//     //       buyOut={handleBuyOut}
//     //       currentPrice={currentPrice}
//     //       stake={stake}
//     //       setStake={setStake}
//     //       selectedMultiplier={selectedMultiplier}
//     //       setSelectedMultiplier={setSelectedMultiplier}
//     //     />
//     //   </div>
//     // </div>
//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// // const calculateMovingAverage = (data, windowSize) => {
// //   let movingAverageData = [];
// //   let sum = 0;

// //   for (let i = 0; i < data.length; i++) {
// //     sum += data[i].close;
// //     if (i >= windowSize - 1) {
// //       movingAverageData.push({
// //         time: data[i].time,
// //         value: sum / windowSize,
// //       });
// //       sum -= data[i - (windowSize - 1)].close;
// //     }
// //   }
// //   return movingAverageData;
// // };

// // const calculateBollingerBands = (data, windowSize = 20, numStdDev = 2) => {
// //   let upperBandData = [];
// //   let lowerBandData = [];
// //   let sum = 0;

// //   for (let i = 0; i < data.length; i++) {
// //     sum += data[i].close;
// //     if (i >= windowSize - 1) {
// //       const mean = sum / windowSize;

// //       let variance = 0;
// //       for (let j = 0; j < windowSize; j++) {
// //         variance += Math.pow(data[i - j].close - mean, 2);
// //       }
// //       variance /= windowSize;

// //       const stdDev = Math.sqrt(variance);

// //       upperBandData.push({
// //         time: data[i].time,
// //         value: mean + numStdDev * stdDev,
// //       });
// //       lowerBandData.push({
// //         time: data[i].time,
// //         value: mean - numStdDev * stdDev,
// //       });

// //       sum -= data[i - (windowSize - 1)].close;
// //     }
// //   }

// //   return { upperBandData, lowerBandData };
// // };

// export default DemoTrading;
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function DemoTrading() {
  const container = useRef();

  useEffect(() => {
    // Check if the script already exists to avoid adding it again
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.id = "tradingview-widget-script";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `{
        "width": "1350",
        "height": "600",
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(DemoTrading);
