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
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardRep2 = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // 샘플 데이터
  const stats = {
    currentRound: 102,
    totalPrizeMoney: "연 3.6억원",
    lastDrawDate: "2025-04-11",
    nextDrawDate: "2025-04-18",
  };

  const recentDraws = [
    {
      round: 102,
      date: "2025-04-11",
      group: 3,
      mainNumbers: "581204",
      bonusNumbers: ["612934", "294751", "837146"],
    },
    {
      round: 101,
      date: "2025-04-04",
      group: 5,
      mainNumbers: "127645",
      bonusNumbers: ["398274", "109283"],
    },
    {
      round: 100,
      date: "2025-03-28",
      group: 1,
      mainNumbers: "345891",
      bonusNumbers: ["427190", "572839", "192830"],
    },
  ];

  const groupStats = [
    { group: "1조", count: 24, percentage: 24 },
    { group: "2조", count: 18, percentage: 18 },
    { group: "3조", count: 21, percentage: 21 },
    { group: "4조", count: 15, percentage: 15 },
    { group: "5조", count: 22, percentage: 22 },
  ];

  const firstDigitStats = [
    { digit: "0", count: 12 },
    { digit: "1", count: 15 },
    { digit: "2", count: 9 },
    { digit: "3", count: 7 },
    { digit: "4", count: 11 },
    { digit: "5", count: 14 },
    { digit: "6", count: 8 },
    { digit: "7", count: 10 },
    { digit: "8", count: 9 },
    { digit: "9", count: 5 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // 조 번호에 맞는 태그 컴포넌트
  const GroupTag = ({ group }) => (
    <span className="inline-block rounded bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800">
      {group}조
    </span>
  );

  // 6자리 번호 포맷팅
  const formatNumber = (number) => {
    return String(number).padStart(6, "0");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 p-6 text-white shadow-lg">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">연금복권 720+ 관리자 대시보드</h1>
          <p className="mt-2 opacity-80">종합 통계 및 당첨 분석</p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* 상단 요약 카드 */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-xl bg-white p-6 shadow">
            <p className="text-sm font-medium text-gray-500">현재 회차</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">
              {stats.currentRound}회
            </p>
            <div className="mt-4 text-xs font-medium text-gray-500">
              다음 추첨일
            </div>
            <div className="text-sm font-semibold text-indigo-600">
              {stats.nextDrawDate}
            </div>
          </div>

          <div className="flex flex-col rounded-xl bg-white p-6 shadow">
            <p className="text-sm font-medium text-gray-500">1등 당첨금</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">
              {stats.totalPrizeMoney}
            </p>
            <div className="mt-4 text-xs font-medium text-gray-500">
              지급 방식
            </div>
            <div className="text-sm font-semibold text-green-600">
              매월 1,000만원씩 × 20년
            </div>
          </div>

          <div className="flex flex-col rounded-xl bg-white p-6 shadow">
            <p className="text-sm font-medium text-gray-500">최다 당첨 조</p>
            <div className="mt-2 flex items-center">
              <span className="text-3xl font-bold text-gray-800">1조</span>
              <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-sm text-blue-800">
                24%
              </span>
            </div>
            <div className="mt-4 text-xs font-medium text-gray-500">
              최근 당첨 조
            </div>
            <div className="text-sm font-semibold text-indigo-600">
              3조 (2025-04-11)
            </div>
          </div>

          <div className="flex flex-col rounded-xl bg-white p-6 shadow">
            <p className="text-sm font-medium text-gray-500">평균 당첨자 수</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">4.2명</p>
            <div className="mt-4 flex justify-between">
              <div>
                <div className="text-xs font-medium text-gray-500">최소</div>
                <div className="text-sm font-semibold text-red-600">1명</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500">최대</div>
                <div className="text-sm font-semibold text-green-600">12명</div>
              </div>
            </div>
          </div>
        </div>

        {/* 탭 메뉴 */}
        <div className="mb-8 rounded-lg bg-white shadow">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "overview"
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              개요
            </button>
            <button
              onClick={() => setActiveTab("statistics")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "statistics"
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              상세 통계
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "history"
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              당첨 내역
            </button>
          </div>

          {/* 개요 탭 콘텐츠 */}
          {activeTab === "overview" && (
            <div className="p-6">
              {/* 최근 당첨 번호 */}
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                최근 당첨 번호
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        회차
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        추첨일
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        당첨 조
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        1등 번호
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        보너스 번호
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {recentDraws.map((draw) => (
                      <tr key={draw.round} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-indigo-600">
                          {draw.round}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {draw.date}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <GroupTag group={draw.group} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="font-mono text-base font-medium text-gray-800">
                            {formatNumber(draw.mainNumbers)}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex flex-col space-y-1">
                            {draw.bonusNumbers.map((number, idx) => (
                              <span
                                key={idx}
                                className="font-mono text-sm text-gray-600"
                              >
                                {formatNumber(number)}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 조별 & 첫 번째 자리 분포 그래프 */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    조별 당첨 분포
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={groupStats}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="percentage"
                        nameKey="group"
                        label={({ name, percent }) =>
                          `${name} ${percent.toFixed(0)}%`
                        }
                      >
                        {groupStats.map((entry, index) => (
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

                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    첫 번째 자리 분포
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                      data={firstDigitStats}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="digit" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="count"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 당첨 패턴 분석 */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-2 text-base font-medium text-gray-800">
                    반복 번호 패턴
                  </h3>
                  <p className="text-sm text-gray-600">
                    최근 10회 중 2회 이상 등장한 반복 패턴
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">끝자리 7-5-3</span>
                      <span className="rounded bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800">
                        3회
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">앞자리 2-8-9</span>
                      <span className="rounded bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800">
                        2회
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-2 text-base font-medium text-gray-800">
                    숫자 합계 통계
                  </h3>
                  <p className="text-sm text-gray-600">
                    당첨 번호 6자리의 합계 범위 분포
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">20~30</span>
                      <div className="mx-4 h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">31~40</span>
                      <div className="mx-4 h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: "32%" }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold">32%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">41~50</span>
                      <div className="mx-4 h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: "23%" }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold">23%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-2 text-base font-medium text-gray-800">
                    홀짝 번호 비율
                  </h3>
                  <p className="text-sm text-gray-600">
                    당첨 번호 6자리의 홀짝 분포
                  </p>
                  <div className="flex h-32 items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 flex h-24 items-end space-x-4">
                        <div
                          className="w-12 rounded-t bg-blue-500"
                          style={{ height: "60%" }}
                        >
                          <div className="flex h-full items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              60%
                            </span>
                          </div>
                        </div>
                        <div
                          className="w-12 rounded-t bg-indigo-500"
                          style={{ height: "40%" }}
                        >
                          <div className="flex h-full items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              40%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <span className="text-xs font-medium text-gray-600">
                          홀수
                        </span>
                        <span className="text-xs font-medium text-gray-600">
                          짝수
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 상세 통계 탭 콘텐츠 */}
          {activeTab === "statistics" && (
            <div className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                당첨 번호 심층 분석
              </h2>
              <p className="mb-6 text-sm text-gray-600">
                연금복권 720+의 역대 당첨 번호에 대한 통계적 분석과 패턴을
                확인하세요.
              </p>

              {/* 간단한 필터 */}
              <div className="mb-6 flex flex-wrap items-center gap-4 rounded-lg bg-gray-50 p-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    조회 기간
                  </label>
                  <select className="rounded-md border-gray-300 text-sm shadow-sm">
                    <option>전체 기간</option>
                    <option>최근 1년</option>
                    <option>최근 6개월</option>
                    <option>최근 3개월</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    당첨 조
                  </label>
                  <select className="rounded-md border-gray-300 text-sm shadow-sm">
                    <option>전체 조</option>
                    <option>1조</option>
                    <option>2조</option>
                    <option>3조</option>
                    <option>4조</option>
                    <option>5조</option>
                  </select>
                </div>

                <div className="flex-grow"></div>

                <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  필터 적용
                </button>
              </div>

              {/* 플레이스홀더 통계 차트들 */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    자릿수별 출현 빈도
                  </h3>
                  <div className="flex h-64 items-center justify-center rounded bg-gray-100">
                    <p className="text-gray-500">
                      자릿수별 번호 출현 차트가 표시됩니다
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    조별 출현 빈도 추이
                  </h3>
                  <div className="flex h-64 items-center justify-center rounded bg-gray-100">
                    <p className="text-gray-500">
                      연도별 조 출현 추이 차트가 표시됩니다
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    인접 번호 분석
                  </h3>
                  <div className="flex h-64 items-center justify-center rounded bg-gray-100">
                    <p className="text-gray-500">
                      인접 숫자 빈도 차트가 표시됩니다
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4">
                  <h3 className="mb-4 text-base font-medium text-gray-800">
                    번호 시퀀스 분석
                  </h3>
                  <div className="flex h-64 items-center justify-center rounded bg-gray-100">
                    <p className="text-gray-500">
                      번호 시퀀스 패턴 차트가 표시됩니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 당첨 내역 탭 콘텐츠 */}
          {activeTab === "history" && (
            <div className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                당첨 내역 전체 보기
              </h2>

              {/* 검색 & 필터 */}
              <div className="mb-6 flex flex-wrap gap-4">
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="회차 또는 날짜로 검색"
                    className="w-full rounded-md border-gray-300 text-sm shadow-sm"
                  />
                </div>
                <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  검색
                </button>
                <button className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
                  전체 내역 다운로드
                </button>
              </div>

              {/* 당첨 내역 테이블 */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        회차
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        추첨일
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        조
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        당첨번호
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        1등 당첨자
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        액션
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-indigo-600">
                          {102 - idx}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {
                            new Date(2025, 3, 11 - idx * 7)
                              .toISOString()
                              .split("T")[0]
                          }
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <GroupTag group={(idx % 5) + 1} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 font-mono text-sm">
                          {Math.floor(100000 + Math.random() * 900000)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {Math.floor(1 + Math.random() * 10)}명
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            상세보기
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 페이지네이션 */}
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  총 <span className="font-medium">102</span>개 결과 중{" "}
                  <span className="font-medium">1</span>-
                  <span className="font-medium">10</span>개 표시
                </div>
                <div className="flex space-x-2">
                  <button
                    className="rounded-md border px-3 py-1 text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    disabled
                  >
                    이전
                  </button>
                  <button className="rounded-md border bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
                    1
                  </button>
                  <button className="rounded-md border px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
                    2
                  </button>
                  <button className="rounded-md border px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
                    3
                  </button>
                  <button className="rounded-md border px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
                    다음
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardRep2;
