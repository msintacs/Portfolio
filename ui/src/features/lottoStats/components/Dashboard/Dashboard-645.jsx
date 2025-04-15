/* eslint-disable */

import React, { useState, useEffect } from "react";
// import { useLottoContext } from '../context/LottoStatsContext'; // 필요하다면 컨텍스트 사용
// 아이콘 사용을 원하시면 MUI 아이콘 또는 다른 아이콘 라이브러리(예: Heroicons)를 import 하세요.
// import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon'; // Heroicons 예시

/**
 * 로또 번호 스타일링을 위한 컴포넌트 (Tailwind 사용)
 * @param {number} number - 로또 번호
 */
const LottoBall = ({ number }) => {
  // 번호 범위에 따라 다른 배경색을 지정합니다. (실제 로또 색상에 맞게 조정 필요)
  let bgColorClass = "bg-gray-400"; // 기본 회색
  if (number >= 1 && number <= 10) bgColorClass = "bg-yellow-400";
  else if (number >= 11 && number <= 20)
    bgColorClass = "bg-blue-500"; // Tailwind 기본 파란색 사용
  else if (number >= 21 && number <= 30) bgColorClass = "bg-red-500";
  else if (number >= 31 && number <= 40)
    bgColorClass = "bg-gray-700"; // 회색 계열
  else if (number >= 41 && number <= 45) bgColorClass = "bg-green-500";

  return (
    <div
      // Tailwind 클래스를 사용하여 공 모양과 스타일링 적용
      className={`flex h-8 w-8 items-center justify-center rounded-full sm:h-9 sm:w-9 ${bgColorClass} mx-1 text-xs font-bold text-white shadow-md transition-transform duration-150 ease-in-out hover:scale-110 sm:text-sm`}
    >
      {number}
    </div>
  );
};

/**
 * /lotto 경로의 Index Route로 사용될 어드민 스타일 대시보드 컴포넌트 (Tailwind CSS 위주)
 */
function Dashboard645() {
  // const { selectValue } = useLottoContext(); // 필요시 로또 종류 가져오기

  // --- 상태 관리 (예시: 나중에 DB 데이터 가져올 때 사용) ---
  // 실제로는 이 데이터들을 API 호출을 통해 받아옵니다.
  const [dashboardStats, setDashboardStats] = useState({
    totalDraws: 1115, // 총 회차 (예시)
    lastDrawDate: "2025-04-12", // 마지막 추첨일 (예시)
    hottestNumber: 34, // 가장 많이 나온 번호 (예시)
    coldestNumber: 9, // 가장 적게 나온 번호 (예시)
  });
  const [recentWinningNumbers, setRecentWinningNumbers] = useState([
    // 최근 당첨 번호 (예시)
    {
      round: 1115,
      date: "2025-04-12",
      numbers: [5, 12, 21, 25, 33, 45],
      bonus: 30,
    },
    {
      round: 1114,
      date: "2025-04-05",
      numbers: [2, 11, 19, 28, 31, 37],
      bonus: 4,
    },
    {
      round: 1113,
      date: "2025-03-29",
      numbers: [8, 15, 22, 23, 30, 41],
      bonus: 10,
    },
    // ... DB에서 더 많은 데이터를 가져올 수 있습니다.
  ]);
  const [isLoading, setIsLoading] = useState(false); // 데이터 로딩 상태

  // --- 데이터 로딩 (예시) ---
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       // 실제 API 엔드포인트로 교체해야 합니다.
  //       const response = await fetch('/api/lotto/dashboard-summary');
  //       const data = await response.json();
  //       setDashboardStats(data.stats);
  //       setRecentWinningNumbers(data.recentDraws);
  //     } catch (error) {
  //       console.error("Failed to fetch dashboard data:", error);
  //       // 에러 처리 (예: 사용자에게 알림 표시)
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  //   // selectValue가 바뀌면 데이터를 다시 로드하려면 dependency array에 추가
  // }, [/* selectValue */]);

  return (
    // 전체 컨테이너: Tailwind 패딩 및 배경색 적용
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      {" "}
      {/* 연한 회색 배경 */}
      {/* 대시보드 제목 */}
      <h1 className="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl">
        관리자 대시보드
        {/* 필요시 로또 종류 표시: {selectValue === 1 ? '(로또 6/45)' : '(연금 720+)'} */}
      </h1>
      {/* --- 섹션 1: 주요 통계 요약 카드 --- */}
      {/* Tailwind Grid를 사용하여 반응형 레이아웃 구성 */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {/* 각 카드는 Tailwind 클래스로 스타일링된 div */}
        <div className="rounded-lg bg-white p-4 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg">
          <p className="mb-1 text-sm font-medium text-gray-500">총 진행 회차</p>
          <p className="text-2xl font-bold text-gray-900">
            {dashboardStats.totalDraws} 회
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg">
          <p className="mb-1 text-sm font-medium text-gray-500">
            마지막 추첨일
          </p>
          <p className="text-xl font-semibold text-gray-900">
            {dashboardStats.lastDrawDate}
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg">
          <p className="mb-1 text-sm font-medium text-gray-500">
            최다 출현 번호
          </p>
          <div className="flex items-center">
            <LottoBall number={dashboardStats.hottestNumber} />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              {dashboardStats.hottestNumber}
            </span>
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg">
          <p className="mb-1 text-sm font-medium text-gray-500">
            최소 출현 번호
          </p>
          <div className="flex items-center">
            <LottoBall number={dashboardStats.coldestNumber} />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              {dashboardStats.coldestNumber}
            </span>
          </div>
        </div>
      </div>
      {/* --- 섹션 2: 최근 당첨 번호 (DB 연동 데이터 표시 영역) --- */}
      <div className="overflow-x-auto rounded-lg bg-white p-5 shadow">
        {" "}
        {/* 내용이 길어질 경우 가로 스크롤 */}
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          최근 당첨 번호 내역
        </h2>
        {isLoading ? (
          <p className="py-4 text-center text-gray-500">
            데이터를 불러오는 중입니다...
          </p>
        ) : recentWinningNumbers.length > 0 ? (
          // 테이블 형태로 데이터 표시 (Admin 페이지에서 자주 사용됨)
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
                  당첨 번호
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  보너스
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {recentWinningNumbers.map((draw) => (
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
                  <td className="whitespace-nowrap px-6 py-3">
                    {/* 로또볼 컴포넌트를 사용하여 번호 표시 */}
                    <div className="flex items-center">
                      {draw.numbers.map((num) => (
                        <LottoBall key={`${draw.round}-${num}`} number={num} />
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <LottoBall number={draw.bonus} />
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
        {/* 페이지네이션이나 '더보기' 기능을 여기에 추가할 수 있습니다. */}
        {/* <div className="mt-4 text-center">
           <button className="text-sm text-indigo-600 hover:text-indigo-800">
             더 많은 내역 보기
           </button>
         </div> */}
      </div>
      {/* 여기에 차트나 다른 관리자용 위젯들을 추가할 수 있습니다. */}
      {/* 예: <div className="mt-8 bg-white p-5 rounded-lg shadow"> ... 차트 컴포넌트 ... </div> */}
    </div>
  );
}

export default Dashboard645;
