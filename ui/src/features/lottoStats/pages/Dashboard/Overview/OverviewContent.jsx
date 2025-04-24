import React from "react";
import RecentWinNumTable from "./RecentWinNumTable";
import NumTopTen from "./NumTopTen";
import MonthlyWinningTrend from "./MonthlyWinningTrend";

function OverviewContent() {
  return (
    <div className="p-6">
      <RecentWinNumTable />
      <div className="mb-4 mt-8 grid grid-cols-2">
        <NumTopTen />
        <MonthlyWinningTrend />
      </div>
    </div>
  );
}

export default OverviewContent;
