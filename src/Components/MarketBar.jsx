import React from "react";
import { Link } from "react-router-dom";
import useCandlestickData from "../hooks/useCandlestickData";

const MarketBar = ({ market }) => {
  const { candlestickData, currentPriceDirection } = useCandlestickData(
    market.symbol
  );

  // Extract the close price from the latest candlestick
  const latestCandle = candlestickData[candlestickData.length - 1];
  const closePrice = latestCandle ? latestCandle.close : null;

  return (
    <tr>
      <td className="py-2">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-primaryblue-700">
            {market.display_name}
          </span>
          <span className="text-sm font-bold text-gray-400">
            {market.symbol}
          </span>
        </div>
      </td>
      <td className="py-2">
        <span>{market.market_display_name}</span>
      </td>
      <td className="py-2">
        <div className="flex flex-col">
          <span>
            {market.subgroup_display_name === "None"
              ? null
              : market.subgroup_display_name}
          </span>
          <span className="text-sm font-bold">
            {market.submarket_display_name}
          </span>
        </div>
      </td>
      <td className="py-2">
        {closePrice !== null ? (
          <span
            className={`font-bold ${
              currentPriceDirection === "higher"
                ? "text-lime-600"
                : "text-red-600"
            }`}
          >
            {closePrice} USD
          </span>
        ) : (
          "Loading..."
        )}
      </td>
      <td className="py-2">
        <span>
          <Link
            to={`/markets/${market.symbol}`}
            className="text-primaryblue-600 font-bold"
          >
            Trade
          </Link>
        </span>
      </td>
    </tr>
  );
};

export default MarketBar;
