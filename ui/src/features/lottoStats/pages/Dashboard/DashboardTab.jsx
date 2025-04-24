import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import OverviewContent from "./Overview/OverviewContent";
import StatContent from "./Stat/StatContent";

const tabs = [
  { key: "overview", label: "개요" },
  { key: "stat", label: "상세 통계" },
];

function DashboardTab() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="mx-auto max-w-6xl py-10 3xl:max-w-8xl">
      <div className="mb-8 rounded-lg bg-white shadow">
        <div className="flex border-b">
          {tabs.map(({ key, label }) => (
            <button
              type="button"
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === key
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 개요 컨텐츠 */}
        {activeTab === "overview" ? <OverviewContent /> : <StatContent />}
      </div>
    </div>
  );
}

export default DashboardTab;
