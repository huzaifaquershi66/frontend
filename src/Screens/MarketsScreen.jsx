import React, { useState, useEffect } from "react";
import { markets } from "../Components/markets";
import MarketBar from "../Components/MarketBar";
import { IoMdSearch } from "react-icons/io";
import useAuth from "../hooks/useAuth";

const MarketsScreen = () => {
  const { auth } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedData, setDisplayedData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Start with 6 markets visible

  useEffect(() => {
    // Filter the displayed data based on the search query
    const filtered = markets.filter((market) =>
      market.display_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedData(filtered);
  }, [searchQuery]);

  // Function to load more markets
  const loadMoreMarkets = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Increment the visible count by 6
  };

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between py-4">
        <h3 className="text-3xl font-bold text-primary py-5">
          Trading History
        </h3>
        <div className="w-full md:w-auto flex items-center gap-2 border-2 border-gray-300 rounded">
          <input
            type="text"
            placeholder="Search markets..."
            className="w-full md:w-auto border-none px-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span>
            <IoMdSearch className="text-gray-400 text-xl" />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-gray-400">
              <th className="py-3 text-left font-medium text-sm">
                Market Name
              </th>
              <th className="py-3 text-left font-medium text-sm">
                Market Title
              </th>
              <th className="py-3 text-left font-medium text-sm">
                Submarket Title
              </th>
              <th className="py-3 text-left font-medium text-sm">Price</th>
              <th className="py-3 text-left font-medium text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.slice(0, visibleCount).map((market, index) => (
              <MarketBar key={index} market={market} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center">
        {visibleCount < displayedData.length && ( // Show button only if there are more markets to display
          <div className="mt-4">
            <button
              onClick={loadMoreMarkets}
              className="bg-primaryblue-100 text-primaryblue-700 px-4 py-2 rounded"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketsScreen;
