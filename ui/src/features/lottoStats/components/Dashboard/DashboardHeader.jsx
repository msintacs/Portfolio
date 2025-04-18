import React from "react";

function DashboardHeader() {
  return (
    <header>
      <div className="3xl:max-w-8xl mx-auto max-w-6xl py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">DASHBOARD</h1>
            <p className="mt-1 text-sm opacity-80">통계 및 패턴 분석</p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-blue-700"
            >
              데이터 새로고침
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
