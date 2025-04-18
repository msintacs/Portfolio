import React from "react";
import DashboardHeader from "./DashboardHeader";
import WinningNumbers from "./WinningNumbers";

function Dashboard645({ lottoKind }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <DashboardHeader />

      {/* 당첨 번호 */}
      <WinningNumbers lottoKind={lottoKind} />
    </div>
  );
}

export default Dashboard645;
