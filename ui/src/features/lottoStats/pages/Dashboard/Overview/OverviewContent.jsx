import React from "react";
import RecentWinNumTable from "./RecentWinNumTable";
import NumTopTen from "./NumTopTen";
import NumRangeDistribution from "./NumRangeDistribution";

function OverviewContent() {
  return (
    <div className="p-6">
      <RecentWinNumTable />
      <div className="mx-auto mb-8 mt-12 grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-2">
        <NumTopTen />
        <NumRangeDistribution />
      </div>
    </div>
  );
}

export default OverviewContent;
