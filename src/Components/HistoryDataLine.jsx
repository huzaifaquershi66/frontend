import React from 'react';

const HistoryDataLine = ({ trade, percentage, status, points }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b py-2">
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold">{trade}</h3>
        <span className="text-base font-medium text-primary">{percentage}</span>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span
          className={`text-base md:text-lg font-medium ${
            status === 'UP' ? 'text-primary' : 'text-secondary'
          }`}
        >
          {status}
        </span>
        <span
          className={`text-base md:text-lg font-medium ${
            status === 'UP' ? 'text-primary' : 'text-secondary'
          }`}
        >
          {points}
        </span>
      </div>
    </div>
  );
};

export default HistoryDataLine;
