import React, { useEffect, useRef, memo } from "react";
import RealTradeSideBar from "../TradingSideBar/RealTradeSideBar";
import { Link } from "react-router-dom";

const RealTrading = () => {
  const container = useRef();

  useEffect(() => {
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.id = "tradingview-widget-script";
      script.type = "text/javascript";
      script.async = true;

      const widgetConfig = {
        width: "1350",
        height: "600",
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        allow_symbol_change: true,
        calendar: false,
        support_host: "https://www.tradingview.com"
      };

      script.innerHTML = JSON.stringify(widgetConfig);
      script.onerror = (error) => {
        console.error("Failed to load TradingView widget script", error);
      };

      setTimeout(() => {
        container.current.appendChild(script);
      }, 500); // Adjusted delay
    }

    return () => {
      const script = document.getElementById("tradingview-widget-script");
      if (script) {
        script.remove();
      }
    };
  }, []);

  const sampleStake = 100;
  const sampleSetStake = (newStake) => {
    console.log("Stake updated to:", newStake);
  };

  const sampleSelectedMultiplier = 2;
  const sampleSetSelectedMultiplier = (newMultiplier) => {
    console.log("Multiplier updated to:", newMultiplier);
  };

  const sampleCurrentPrice = 50.25;
  const sampleHandleBuyIn = () => {
    console.log("Buy in action triggered");
  };

  const sampleHandleBuyOut = () => {
    console.log("Buy out action triggered");
  };

  return (
    <div className="flex flex-row">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
      <div>
        <RealTradeSideBar
          stake={sampleStake}
          setStake={sampleSetStake}
          selectedMultiplier={sampleSelectedMultiplier}
          setSelectedMultiplier={sampleSetSelectedMultiplier}
          currentPrice={sampleCurrentPrice}
        
          buyIn={sampleHandleBuyIn} // Updated prop
          buyOut={sampleHandleBuyOut} // Updated prop
        />
      </div>
    </div>
  );
};

export default memo(RealTrading);
