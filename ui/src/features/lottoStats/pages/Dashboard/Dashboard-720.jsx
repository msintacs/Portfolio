/* eslint-disable */

import React, { useState, useEffect } from "react";
import WinningNumbers from "./WinningNumbers";
// import { useLottoContext } from '../context/LottoStatsContext'; // 이 컴포넌트를 언제 보여줄지 결정하기 위해 필요할 수 있습니다.

// --- 연금복권 관련 Helper 컴포넌트 ---

/**
 * '조' 번호를 시각적으로 표시하는 태그 (Tailwind 사용)
 * @param {number | string} group - 조 번호 (예: 1)
 */
const GroupTag = ({ group }) => (
  <span className="mr-2 inline-block rounded-md bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-800">
    {group}조
  </span>
);

/**
 * 6자리 숫자를 보기 좋게 포맷팅하는 함수 (예: 123456)
 * @param {string | number} digits - 6자리 숫자 또는 문자열
 */
const formatSixDigits = (digits) => {
  if (digits === null || digits === undefined) return "------"; // 데이터 없을 경우
  return String(digits).padStart(6, "0"); // 항상 6자리로 표시 (앞에 0 채움)
};

/**
 * 연금복권 720+ 용 대시보드 컴포넌트 (Tailwind CSS 위주)
 * 파일명 예시: DashboardPension.jsx
 */
function Dashboard720({ lottoKind }) {
  // const { selectValue } = useLottoContext(); // 이 값이 2일 때 이 컴포넌트가 렌더링되어야 함

  // --- 상태 관리 (연금복권용 예시 데이터) ---
  // 실제 앱에서는 API를 통해 이 데이터들을 받아옵니다.
  const [pensionStats, setPensionStats] = useState({
    totalDraws: 200, // 총 회차 (예시)
    lastDrawDate: "2025-04-10", // 마지막 추첨일 (예시 - 목요일)
    latestWinningGroup: 3, // 최근 1등 '조' (예시)
    latestBonusDigits: "123456", // 최근 보너스 번호 중 하나 (예시)
  });
  const [recentPensionDraws, setRecentPensionDraws] = useState([
    // 최근 당첨 번호 (예시)
    // 실제 데이터 구조는 API 응답에 맞춰야 합니다.
    {
      round: 200,
      date: "2025-04-10",
      firstPrize: { group: 3, digits: "582903" },
      bonusPrizeDigits: ["198745", "884521" /* ... */],
    },
    {
      round: 199,
      date: "2025-04-03",
      firstPrize: { group: 1, digits: "112085" },
      bonusPrizeDigits: ["036912"],
    },
    {
      round: 198,
      date: "2025-03-27",
      firstPrize: { group: 5, digits: "937741" },
      bonusPrizeDigits: ["774590", "331025"],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false); // 데이터 로딩 상태

  // --- 데이터 로딩 (예시) ---
  // useEffect(() => {
  //   const fetchPensionData = async () => {
  //     setIsLoading(true);
  //     try {
  //       // 연금복권용 API 엔드포인트로 변경
  //       const response = await fetch('/api/pension720/dashboard-summary');
  //       const data = await response.json();
  //       setPensionStats(data.stats);
  //       setRecentPensionDraws(data.recentDraws);
  //     } catch (error) {
  //       console.error("Failed to fetch pension dashboard data:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //
  //   // selectValue가 연금복권(예: 2)일 때만 데이터를 가져오도록 조건 추가
  //   // if (selectValue === 2) {
  //      fetchPensionData();
  //   // }
  // }, [/* selectValue */]); // selectValue가 바뀌면 다시 fetch

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl">
        연금복권 720+ 대시보드
      </h1>

      {/* --- 섹션 1: 주요 통계 요약 카드 --- */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {/* 카드 1: 총 회차 */}
        <div className="rounded-lg bg-white p-4 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg">
          <p className="mb-1 text-sm font-medium text-gray-500">총 진행 회차</p>
          <p className="text-2xl font-bold text-gray-900">
            {pensionStats.totalDraws} 회
          </p>
        </div>
        {/* 카드 2: 마지막 추첨일 */}
        <div className="rounded-lg bg-white p-4 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg">
          <p className="mb-1 text-sm font-medium text-gray-500">
            마지막 추첨일
          </p>
          <p className="text-xl font-semibold text-gray-900">
            {pensionStats.lastDrawDate}
          </p>
        </div>
        {/* 카드 3: 최근 1등 '조' */}
        <div className="rounded-lg bg-white p-4 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg">
          <p className="mb-1 text-sm font-medium text-gray-500">
            최근 1등 당첨 조
          </p>
          <div className="mt-1 flex items-center">
            <GroupTag group={pensionStats.latestWinningGroup} />
            <span className="text-2xl font-bold text-gray-900">
              {pensionStats.latestWinningGroup}조
            </span>
          </div>
        </div>
        {/* 카드 4: 최근 보너스 번호 */}
        <div className="rounded-lg bg-white p-4 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg">
          <p className="mb-1 text-sm font-medium text-gray-500">
            최근 보너스 번호
          </p>
          {/* 보너스 번호 형식에 맞게 표시 (예시로 6자리 포맷 사용) */}
          <p className="mt-1 font-mono text-xl font-semibold tracking-wider text-gray-900">
            {formatSixDigits(pensionStats.latestBonusDigits)}
          </p>
        </div>
      </div>

      {/* --- 섹션 2: 최근 당첨 번호 내역 (DB 연동 데이터 표시 영역) --- */}
      <div className="overflow-x-auto rounded-lg bg-white p-5 shadow">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          최근 당첨 결과 (1등 & 보너스)
        </h2>
        {isLoading ? (
          <p className="py-4 text-center text-gray-500">
            데이터를 불러오는 중입니다...
          </p>
        ) : recentPensionDraws.length > 0 ? (
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
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  1등 당첨번호
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  보너스 번호
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {recentPensionDraws.map((draw) => (
                <tr
                  key={draw.round}
                  className="transition-colors duration-150 hover:bg-gray-50"
                >
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-indigo-600">
                    {draw.round}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
                    {draw.date}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    {/* '조' 태그와 6자리 번호를 함께 표시 */}
                    <div className="flex items-center">
                      <GroupTag group={draw.firstPrize?.group} />
                      <span className="font-mono tracking-wider">
                        {formatSixDigits(draw.firstPrize?.digits)}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 font-mono text-sm tracking-wider text-gray-700">
                    {/* 보너스 번호가 여러 개일 수 있으므로, 여기서는 예시로 첫 번째 번호만 표시 */}
                    {draw.bonusPrizeDigits && draw.bonusPrizeDigits.length > 0
                      ? formatSixDigits(draw.bonusPrizeDigits[0])
                      : "-"}
                    {/* 혹은 모든 보너스 번호를 표시하고 싶다면 join 등을 사용 */}
                    {/* {draw.bonusPrizeDigits?.map(formatSixDigits).join(', ')} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="py-4 text-center text-gray-500">
            표시할 데이터가 없습니다.
          </p>
        )}
        {/* 페이지네이션 등 추가 가능 */}
      </div>

      {/* 여기에 연금복권 관련 통계 차트나 다른 위젯들을 추가할 수 있습니다. */}
      <WinningNumbers lottoKind={lottoKind} />
    </div>
  );
}

export default Dashboard720;
