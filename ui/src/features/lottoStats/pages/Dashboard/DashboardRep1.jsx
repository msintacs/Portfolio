/* eslint-disable */

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardRep1 = () => {
  const [timeRange, setTimeRange] = useState("month");

  // 샘플 데이터
  const frequencyData = [
    { number: 1, frequency: 12 },
    { number: 2, frequency: 15 },
    { number: 3, frequency: 8 },
    { number: 4, frequency: 22 },
    { number: 5, frequency: 17 },
    { number: 6, frequency: 10 },
    { number: 7, frequency: 19 },
    { number: 8, frequency: 21 },
    { number: 9, frequency: 14 },
    { number: 10, frequency: 11 },
  ];

  const recentDraws = [
    {
      round: 1118,
      date: "2025-04-06",
      numbers: [7, 11, 20, 32, 34, 45],
      bonus: 10,
      prize: "20억원",
    },
    {
      round: 1117,
      date: "2025-03-30",
      numbers: [3, 12, 24, 27, 30, 32],
      bonus: 14,
      prize: "18억원",
    },
    {
      round: 1116,
      date: "2025-03-23",
      numbers: [1, 9, 12, 23, 39, 45],
      bonus: 30,
      prize: "24억원",
    },
    {
      round: 1115,
      date: "2025-03-16",
      numbers: [5, 6, 13, 14, 22, 45],
      bonus: 10,
      prize: "16억원",
    },
  ];

  const monthlyTrend = [
    { month: "1월", winCount: 3, totalTickets: 120 },
    { month: "2월", winCount: 5, totalTickets: 150 },
    { month: "3월", winCount: 2, totalTickets: 180 },
    { month: "4월", winCount: 7, totalTickets: 200 },
  ];

  const distributionData = [
    { name: "1~10번", value: 84 },
    { name: "11~20번", value: 92 },
    { name: "21~30번", value: 78 },
    { name: "31~40번", value: 67 },
    { name: "41~45번", value: 41 },
  ];

  // 로또 번호 색상
  const getLottoColor = (num) => {
    if (num <= 10) return "#fcc419";
    if (num <= 20) return "#4dabf7";
    if (num <= 30) return "#f03e3e";
    if (num <= 40) return "#212529";
    return "#40c057";
  };

  const COLORS = ["#fcc419", "#4dabf7", "#f03e3e", "#212529", "#40c057"];

  // 로또 볼 컴포넌트
  const LottoBall = ({ number }) => (
    <div
      className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
      style={{ backgroundColor: getLottoColor(number) }}
    >
      {number}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더 */}
      <header className="bg-indigo-700 p-6 text-white shadow-lg">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">로또 통계 대시보드</h1>
          <p className="mt-2 opacity-80">종합 당첨 분석 및 통계</p>
        </div>
      </header>

      {/* 시간 필터 */}
      <div className="mx-auto mt-6 max-w-7xl px-4">
        <div className="mb-6 flex w-fit space-x-2 rounded-lg bg-white p-2 shadow">
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium ${timeRange === "week" ? "bg-indigo-100 text-indigo-800" : "text-gray-600 hover:bg-gray-100"}`}
            onClick={() => setTimeRange("week")}
          >
            주간
          </button>
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium ${timeRange === "month" ? "bg-indigo-100 text-indigo-800" : "text-gray-600 hover:bg-gray-100"}`}
            onClick={() => setTimeRange("month")}
          >
            월간
          </button>
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium ${timeRange === "year" ? "bg-indigo-100 text-indigo-800" : "text-gray-600 hover:bg-gray-100"}`}
            onClick={() => setTimeRange("year")}
          >
            연간
          </button>
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium ${timeRange === "all" ? "bg-indigo-100 text-indigo-800" : "text-gray-600 hover:bg-gray-100"}`}
            onClick={() => setTimeRange("all")}
          >
            전체
          </button>
        </div>
      </div>

      {/* 핵심 요약 통계 */}
      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border-t-4 border-indigo-500 bg-white p-6 shadow-md">
          <p className="text-sm font-medium text-gray-500">총 진행 회차</p>
          <p className="mt-2 text-3xl font-bold text-gray-800">1,118회</p>
          <p className="mt-1 text-xs text-gray-500">최초 시작: 2002년 12월</p>
        </div>

        <div className="rounded-xl border-t-4 border-green-500 bg-white p-6 shadow-md">
          <p className="text-sm font-medium text-gray-500">이번주 당첨금</p>
          <p className="mt-2 text-3xl font-bold text-gray-800">25억원</p>
          <p className="mt-1 text-xs text-green-500">전주 대비 +5억원 ↑</p>
        </div>

        <div className="rounded-xl border-t-4 border-yellow-500 bg-white p-6 shadow-md">
          <p className="text-sm font-medium text-gray-500">
            가장 많이 나온 번호
          </p>
          <div className="mt-2 flex items-center">
            <LottoBall number={34} />
            <p className="ml-3 text-2xl font-bold text-gray-800">34번</p>
            <span className="ml-2 rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
              148회
            </span>
          </div>
        </div>

        <div className="rounded-xl border-t-4 border-red-500 bg-white p-6 shadow-md">
          <p className="text-sm font-medium text-gray-500">
            가장 적게 나온 번호
          </p>
          <div className="mt-2 flex items-center">
            <LottoBall number={9} />
            <p className="ml-3 text-2xl font-bold text-gray-800">9번</p>
            <span className="ml-2 rounded bg-red-100 px-2 py-1 text-xs text-red-800">
              87회
            </span>
          </div>
        </div>
      </div>

      {/* 데이터 차트 영역 */}
      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-2">
        {/* 번호별 출현 빈도 */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            번호별 출현 빈도 (TOP 10)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={frequencyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="number" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="frequency" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 월별 당첨 추이 */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            월별 당첨 추이
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={monthlyTrend}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
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
                dataKey="totalTickets"
                stroke="#82ca9d"
                name="구매 횟수"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 번호 분포도 */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            번호 대역별 분포
          </h2>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {distributionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 최근 당첨 번호 */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            최근 당첨 번호
          </h2>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    회차
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    추첨일
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    당첨번호
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    당첨금
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {recentDraws.map((draw) => (
                  <tr key={draw.round} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-indigo-600">
                      {draw.round}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {draw.date}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="flex">
                        {draw.numbers.map((num) => (
                          <LottoBall key={num} number={num} />
                        ))}
                        <span className="mx-1 text-gray-400">+</span>
                        <LottoBall number={draw.bonus} />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {draw.prize}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
              전체 내역 보기 →
            </button>
          </div>
        </div>
      </div>

      {/* 추가 분석 도구 */}
      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-md md:col-span-1">
          <h2 className="mb-4 text-lg font-bold text-gray-800">번호 생성기</h2>
          <p className="mb-4 text-sm text-gray-600">
            통계를 기반으로 최적화된 번호를 생성해 보세요.
          </p>
          <div className="mb-4 flex space-x-2">
            <button className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              랜덤 생성
            </button>
            <button className="flex-1 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
              최적화 생성
            </button>
          </div>
          <div className="mt-4 rounded-md bg-gray-50 p-3">
            <div className="mb-2 flex justify-center space-x-1">
              <LottoBall number={7} />
              <LottoBall number={12} />
              <LottoBall number={25} />
              <LottoBall number={32} />
              <LottoBall number={36} />
              <LottoBall number={45} />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md md:col-span-2">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            당첨 패턴 분석
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-md bg-gray-50 p-3">
              <p className="font-medium text-gray-700">연속 번호 포함 확률</p>
              <p className="mt-1 text-2xl font-bold text-indigo-600">32%</p>
            </div>
            <div className="rounded-md bg-gray-50 p-3">
              <p className="font-medium text-gray-700">홀짝 비율 분포</p>
              <p className="mt-1 text-2xl font-bold text-indigo-600">
                3:3 (41%)
              </p>
            </div>
            <div className="rounded-md bg-gray-50 p-3">
              <p className="font-medium text-gray-700">합계 범위</p>
              <p className="mt-1 text-2xl font-bold text-indigo-600">
                120~160 (58%)
              </p>
            </div>
            <div className="rounded-md bg-gray-50 p-3">
              <p className="font-medium text-gray-700">최다 구간</p>
              <p className="mt-1 text-2xl font-bold text-indigo-600">
                11~20번 (32%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRep1;
