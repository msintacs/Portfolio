/* eslint-disable */

import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardRep3 = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  const [expandedSection, setExpandedSection] = useState(null);

  // 샘플 데이터
  const numberFrequency = Array.from({ length: 45 }, (_, i) => ({
    number: i + 1,
    frequency: Math.floor(Math.random() * 100) + 50,
    recentFrequency: Math.floor(Math.random() * 30) + 5,
  })).sort((a, b) => b.frequency - a.frequency);

  const topNumbers = numberFrequency.slice(0, 10);
  const bottomNumbers = [...numberFrequency]
    .sort((a, b) => a.frequency - b.frequency)
    .slice(0, 10);

  const weeklyData = [
    { week: "1주차", winCount: 2, totalTickets: 120, winRate: 1.67 },
    { week: "2주차", winCount: 5, totalTickets: 150, winRate: 3.33 },
    { week: "3주차", winCount: 1, totalTickets: 180, winRate: 0.56 },
    { week: "4주차", winCount: 3, totalTickets: 140, winRate: 2.14 },
    { week: "5주차", winCount: 6, totalTickets: 200, winRate: 3.0 },
    { week: "6주차", winCount: 4, totalTickets: 160, winRate: 2.5 },
    { week: "7주차", winCount: 2, totalTickets: 130, winRate: 1.54 },
    { week: "8주차", winCount: 7, totalTickets: 190, winRate: 3.68 },
  ];

  const numberCombinations = [
    { combination: "홀수 3개 + 짝수 3개", percentage: 32 },
    { combination: "홀수 4개 + 짝수 2개", percentage: 26 },
    { combination: "홀수 2개 + 짝수 4개", percentage: 21 },
    { combination: "홀수 5개 + 짝수 1개", percentage: 12 },
    { combination: "홀수 1개 + 짝수 5개", percentage: 7 },
    { combination: "홀수 6개", percentage: 1 },
    { combination: "짝수 6개", percentage: 1 },
  ];

  const sumRanges = [
    { range: "100-120", count: 18 },
    { range: "121-140", count: 24 },
    { range: "141-160", count: 32 },
    { range: "161-180", count: 25 },
    { range: "181-200", count: 16 },
    { range: "201-220", count: 10 },
    { range: "221+", count: 5 },
  ];

  const consecutiveNumbers = [
    { type: "연속 번호 없음", percentage: 42 },
    { type: "1쌍의 연속 번호", percentage: 38 },
    { type: "2쌍의 연속 번호", percentage: 15 },
    { type: "3연속 번호", percentage: 4 },
    { type: "4연속 이상", percentage: 1 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82ca9d",
    "#ffc658",
  ];

  // 로또 번호 색상
  const getLottoColor = (num) => {
    if (num <= 10) return "#fcc419";
    if (num <= 20) return "#4dabf7";
    if (num <= 30) return "#f03e3e";
    if (num <= 40) return "#212529";
    return "#40c057";
  };

  // 로또 볼 컴포넌트
  const LottoBall = ({ number, size = "md" }) => {
    const sizes = {
      sm: "w-6 h-6 text-xs",
      md: "w-8 h-8 text-sm",
      lg: "w-10 h-10 text-base",
    };

    return (
      <div
        className={`inline-flex items-center justify-center rounded-full ${sizes[size]} font-bold text-white`}
        style={{ backgroundColor: getLottoColor(number) }}
      >
        {number}
      </div>
    );
  };

  // 섹션 확장/축소 토글
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* 헤더 */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 p-6 text-white shadow-lg">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">로또 데이터 분석 대시보드</h1>
              <p className="mt-2 opacity-80">고급 통계 및 패턴 분석</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-white/20 px-4 py-2 text-sm backdrop-blur-sm transition hover:bg-white/30">
                데이터 새로고침
              </button>
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-indigo-900 transition hover:bg-indigo-100">
                분석 보고서 생성
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 필터 탭 */}
      <div className="mx-auto mt-6 max-w-7xl px-4">
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("weekly")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "weekly"
                  ? "border-b-2 border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              주간 분석
            </button>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "monthly"
                  ? "border-b-2 border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              월간 분석
            </button>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "yearly"
                  ? "border-b-2 border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              연간 분석
            </button>
            <button
              onClick={() => setActiveTab("overall")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "overall"
                  ? "border-b-2 border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              누적 통계
            </button>
          </div>
        </div>
      </div>

      {/* 주요 통계 카드 */}
      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-xl bg-white p-6 shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                전체 당첨 확률
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-800">0.032%</p>
            </div>
            <span className="rounded bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-800">
              1등 기준
            </span>
          </div>
          <div className="mt-4 text-xs font-medium text-gray-500">
            1등 당첨 평균 주기
            <span className="mt-1 block text-xl font-bold text-gray-800">
              37주
            </span>
          </div>
        </div>

        <div className="flex flex-col rounded-xl bg-white p-6 shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                최적 당첨 조합
              </p>
              <div className="mt-2 flex flex-wrap space-x-1">
                <LottoBall number={7} />
                <LottoBall number={14} />
                <LottoBall number={22} />
                <LottoBall number={33} />
                <LottoBall number={38} />
                <LottoBall number={42} />
              </div>
            </div>
            <span className="rounded bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800">
              AI 추천
            </span>
          </div>
          <div className="mt-4 text-xs font-medium text-gray-500">
            예상 적중 확률
            <span className="mt-1 block text-xl font-bold text-green-600">
              +5.2%
            </span>
          </div>
        </div>

        <div className="flex flex-col rounded-xl bg-white p-6 shadow-md">
          <p className="text-sm font-medium text-gray-500">최근 핫 번호</p>
          <div className="mt-2 flex space-x-1">
            <LottoBall number={8} />
            <LottoBall number={12} />
            <LottoBall number={34} />
          </div>
          <div className="mt-4 text-xs font-medium text-gray-500">
            최근 3개월간 출현 빈도
            <span className="mt-1 block text-xl font-bold text-red-600">
              60% ↑
            </span>
          </div>
        </div>

        <div className="flex flex-col rounded-xl bg-white p-6 shadow-md">
          <p className="text-sm font-medium text-gray-500">최근 콜드 번호</p>
          <div className="mt-2 flex space-x-1">
            <LottoBall number={13} />
            <LottoBall number={27} />
            <LottoBall number={39} />
          </div>
          <div className="mt-4 text-xs font-medium text-gray-500">
            최근 미출현 기간
            <span className="mt-1 block text-xl font-bold text-blue-600">
              15주
            </span>
          </div>
        </div>
      </div>

      {/* 확장 가능한 분석 섹션 */}
      <div className="mx-auto mt-8 max-w-7xl space-y-6 px-4">
        {/* 번호 빈도 분석 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div
            className="flex cursor-pointer items-center justify-between px-6 py-4 hover:bg-gray-50"
            onClick={() => toggleSection("numberFrequency")}
          >
            <h2 className="text-lg font-semibold text-gray-800">
              번호별 출현 빈도 분석
            </h2>
            <div className="flex items-center">
              <span
                className={`text-sm ${expandedSection === "numberFrequency" ? "text-indigo-600" : "text-gray-500"}`}
              >
                {expandedSection === "numberFrequency" ? "접기" : "자세히 보기"}
              </span>
              <svg
                className={`ml-1 h-5 w-5 transition-transform ${expandedSection === "numberFrequency" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {expandedSection === "numberFrequency" && (
            <div className="border-t border-gray-100 p-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    가장 많이 나온 번호 (TOP 10)
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={topNumbers}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis
                        dataKey="number"
                        type="category"
                        width={40}
                        tickFormatter={(value) => `${value}번`}
                      />
                      <Tooltip
                        formatter={(value, name, props) => [
                          `${value}회`,
                          `출현 횟수`,
                        ]}
                        labelFormatter={(value) => `${value}번`}
                      />
                      <Bar
                        dataKey="frequency"
                        fill="#8884d8"
                        radius={[0, 4, 4, 0]}
                        label={{
                          position: "right",
                          formatter: (value) => `${value}회`,
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    가장 적게 나온 번호 (BOTTOM 10)
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={bottomNumbers}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis
                        dataKey="number"
                        type="category"
                        width={40}
                        tickFormatter={(value) => `${value}번`}
                      />
                      <Tooltip
                        formatter={(value, name, props) => [
                          `${value}회`,
                          `출현 횟수`,
                        ]}
                        labelFormatter={(value) => `${value}번`}
                      />
                      <Bar
                        dataKey="frequency"
                        fill="#FF8042"
                        radius={[0, 4, 4, 0]}
                        label={{
                          position: "right",
                          formatter: (value) => `${value}회`,
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 text-base font-medium text-gray-800">
                  번호별 추세 분석
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  전체 기간과 최근 3개월 데이터를 비교하여 상승/하락 추세를
                  확인할 수 있습니다.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          번호
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          전체 기간
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          최근 3개월
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          변화 추이
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {numberFrequency.slice(0, 5).map((item) => {
                        const trend =
                          (item.recentFrequency / item.frequency) * 100 - 20;
                        return (
                          <tr key={item.number} className="hover:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-4">
                              <LottoBall number={item.number} size="sm" />
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600">
                              {item.frequency}회
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600">
                              {item.recentFrequency}회
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                {trend > 0 ? (
                                  <span className="flex items-center font-medium text-green-600">
                                    <svg
                                      className="mr-1 h-4 w-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                      />
                                    </svg>
                                    {trend.toFixed(1)}%
                                  </span>
                                ) : (
                                  <span className="flex items-center font-medium text-red-600">
                                    <svg
                                      className="mr-1 h-4 w-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                      />
                                    </svg>
                                    {Math.abs(trend).toFixed(1)}%
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 당첨 패턴 분석 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div
            className="flex cursor-pointer items-center justify-between px-6 py-4 hover:bg-gray-50"
            onClick={() => toggleSection("winningPatterns")}
          >
            <h2 className="text-lg font-semibold text-gray-800">
              당첨 패턴 분석
            </h2>
            <div className="flex items-center">
              <span
                className={`text-sm ${expandedSection === "winningPatterns" ? "text-indigo-600" : "text-gray-500"}`}
              >
                {expandedSection === "winningPatterns" ? "접기" : "자세히 보기"}
              </span>
              <svg
                className={`ml-1 h-5 w-5 transition-transform ${expandedSection === "winningPatterns" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {expandedSection === "winningPatterns" && (
            <div className="border-t border-gray-100 p-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* 홀짝 조합 */}
                <div>
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    홀짝 조합 분포
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={numberCombinations}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="combination"
                        angle={-15}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis />
                      <Tooltip
                        formatter={(value, name, props) => [
                          `${value}%`,
                          `비율`,
                        ]}
                      />
                      <Bar
                        dataKey="percentage"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* 합계 범위 */}
                <div>
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    당첨 번호 합계 범위
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={sumRanges}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip
                        formatter={(value, name, props) => [
                          `${value}회`,
                          `발생 횟수`,
                        ]}
                      />
                      <Bar
                        dataKey="count"
                        fill="#00C49F"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* 연속 번호 패턴 */}
                <div>
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    연속 번호 패턴
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={consecutiveNumbers}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="percentage"
                        nameKey="type"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {consecutiveNumbers.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value, name, props) => [`${value}%`, name]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* 주간 당첨 분석 */}
                <div>
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    주간 당첨 분석
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={weeklyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="winCount"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                        name="당첨 횟수"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="winRate"
                        stroke="#82ca9d"
                        name="당첨률 (%)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-indigo-50 p-4">
                <h3 className="mb-2 text-base font-medium text-indigo-800">
                  패턴 분석 요약
                </h3>
                <p className="text-sm text-indigo-700">
                  분석 결과, 가장 높은 확률로 나타나는 패턴은{" "}
                  <strong>홀수 3개와 짝수 3개의 조합(32%)</strong>이며, 합계
                  범위는 <strong>141-160 사이(32%)</strong>가 가장 빈번합니다.
                  또한 <strong>연속 번호가 없는 조합(42%)</strong>이 가장 많이
                  나타나지만, 한 쌍의 연속 번호가 포함된 경우(38%)도 상당히 높은
                  비율을 차지합니다.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 통계 기반 예측 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div
            className="flex cursor-pointer items-center justify-between px-6 py-4 hover:bg-gray-50"
            onClick={() => toggleSection("predictions")}
          >
            <h2 className="text-lg font-semibold text-gray-800">
              통계 기반 예측 모델
            </h2>
            <div className="flex items-center">
              <span
                className={`text-sm ${expandedSection === "predictions" ? "text-indigo-600" : "text-gray-500"}`}
              >
                {expandedSection === "predictions" ? "접기" : "자세히 보기"}
              </span>
              <svg
                className={`ml-1 h-5 w-5 transition-transform ${expandedSection === "predictions" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {expandedSection === "predictions" && (
            <div className="border-t border-gray-100 p-6">
              <div className="mb-4 border-l-4 border-yellow-400 bg-yellow-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>주의사항:</strong> 예측 모델은 과거 데이터 분석을
                      기반으로 한 통계적 참고 자료일 뿐입니다. 복권은 무작위로
                      선택되며, 어떤 예측 모델도 당첨을 보장할 수 없습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="col-span-1">
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    예측 모델 기준
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-700">
                        핫 번호 분석
                      </h4>
                      <p className="text-xs text-gray-600">
                        최근 20회차 동안 자주 등장한 번호를 기반으로 분석
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-700">
                        콜드 번호 분석
                      </h4>
                      <p className="text-xs text-gray-600">
                        오랜 기간 등장하지 않은 번호들의 확률 분석
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-700">
                        패턴 매칭
                      </h4>
                      <p className="text-xs text-gray-600">
                        역대 당첨 번호의 패턴을 분석하여 유사 패턴 추출
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-700">
                        통계적 균형
                      </h4>
                      <p className="text-xs text-gray-600">
                        홀짝, 고저 번호, 합계 등의 통계적 균형 고려
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    이번 주 추천 번호 조합
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border bg-white p-4 shadow-sm"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            조합 {idx + 1}
                          </span>
                          <span className="rounded bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800">
                            추천 지수: {95 - idx * 5}%
                          </span>
                        </div>
                        <div className="mb-3 flex justify-center space-x-2">
                          {Array.from({ length: 6 }).map((_, numIdx) => (
                            <LottoBall
                              key={numIdx}
                              number={Math.floor(Math.random() * 45) + 1}
                            />
                          ))}
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <div className="mb-1 flex justify-between">
                            <span>홀/짝 비율:</span>
                            <span className="font-medium">3:3</span>
                          </div>
                          <div className="mb-1 flex justify-between">
                            <span>합계:</span>
                            <span className="font-medium">146</span>
                          </div>
                          <div className="flex justify-between">
                            <span>연속 번호:</span>
                            <span className="font-medium">없음</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                      맞춤형 번호 추천 받기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 푸터 */}
      <footer className="mt-12 border-t bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500">
          <p>
            이 대시보드는 정보 제공 목적으로만 사용됩니다. 당첨을 보장하지
            않으며, 개인 판단에 따라 이용하시기 바랍니다.
          </p>
          <p className="mt-2">
            &copy; 2025 로또 통계 분석 시스템. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardRep3;
