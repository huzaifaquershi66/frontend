import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const TradingHistory = () => {
  const { auth } = useAuth();
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("today"); // Default tab

  useEffect(() => {
    const getTradeHistory = async () => {
      try {
        const response = await axios.get(`/trades/${auth.user.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("tradeHistory", response.data);
        setData(response.data?.trades || []); // Set the trade history data to state
      } catch (error) {
        console.log("Error [get tradeHistory]", error);
      }
    };

    getTradeHistory();
  }, [auth.user.id]);

  // Function to filter and sort trades based on the selected tab
  const filteredData = () => {
    const now = new Date();

    // Filter trades based on the selected tab
    const filteredTrades = data.filter((trade) => {
      const tradeDate = new Date(trade.createdAt);
      switch (selectedTab) {
        case "today":
          return tradeDate.toDateString() === now.toDateString();
        case "yesterday":
          const yesterday = new Date();
          yesterday.setDate(now.getDate() - 1);
          return tradeDate.toDateString() === yesterday.toDateString();
        case "week":
          return tradeDate >= new Date(now.setDate(now.getDate() - 7));
        case "month":
          return tradeDate >= new Date(now.setMonth(now.getMonth() - 1));
        default:
          return true; // Show all trades if no filter is applied
      }
    });

    // Sort the filtered trades in descending order (newer first)
    return filteredTrades.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  };

  const PreviewData = () => {
    return (
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-gray-400">
            <th className="py-3 text-left font-medium text-sm">Market Name</th>
            <th className="py-3 text-left font-medium text-sm">Trade Type</th>
            <th className="py-3 text-left font-medium text-sm">Multiplier</th>
            <th className="py-3 text-left font-medium text-sm">Trade Amount</th>
            <th className="py-3 text-left font-medium text-sm">Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredData().map((history, index) => (
            <HistoryBar key={index} data={history} />
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-primary py-5">Trading History</h3>
      {/* Tabs for filtering */}
      <div className="mb-4">
        <div className="flex items-center gap-5 py-2">
          <button
            onClick={() => setSelectedTab("today")}
            className={`rounded-md py-2 px-4 ${
              selectedTab === "today" ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setSelectedTab("yesterday")}
            className={`rounded-md py-2 px-4 ${
              selectedTab === "yesterday"
                ? "bg-primary text-white"
                : "bg-gray-200"
            }`}
          >
            Yesterday
          </button>
          <button
            onClick={() => setSelectedTab("week")}
            className={`rounded-md py-2 px-4 ${
              selectedTab === "week" ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            Last Week
          </button>
          <button
            onClick={() => setSelectedTab("month")}
            className={`rounded-md py-2 px-4 ${
              selectedTab === "month" ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            Last Month
          </button>
        </div>

        <div>
          {data.length > 0 ? <PreviewData /> : <div>No data found.</div>}
        </div>
      </div>
    </div>
  );
};

const HistoryBar = ({ data }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };
    return date.toLocaleString("en-US", options);
  };
  return (
    <tr>
      <td className="py-2">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-primaryblue-700">
            {data.tradePair}
          </span>
        </div>
      </td>
      <td className="py-2">
        <span>{data.tradeType === "demo" ? "Demo" : "Real"}</span>
      </td>
      <td className="py-2">
        <span>{data.multiplier}</span>
      </td>
      <td className="py-2">
        <span className="font-bold">{data.tradeAmount} USD</span>
      </td>
      <td className="py-2">
        <span>{formatDate(data.createdAt)}</span>
      </td>
    </tr>
  );
};

export default TradingHistory;
