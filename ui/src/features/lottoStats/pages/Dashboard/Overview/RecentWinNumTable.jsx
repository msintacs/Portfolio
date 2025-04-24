import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import useAsync from "../../../../../hooks/useAsync";
import { getRecentWinNum } from "../../../service/Lotto";
import { convertNumtoArray, printNumbers } from "../../../utils/numUtils";

/*
API 응답 구조
results: {
    bonusNum: 24
    drawDate: "2025-04-12"
    drawRound: 1167
    fstIndvAmount: 2884087913
    fstTotalAmount: 28840879130
    fstWinCnt: 10
    num1: 8
    num2: 23
    num3: 31
    num4: 35
    num5: 39
    num6: 40
    totalSalesAmount: 118762131000
}
*/
function RecentWinNumTable() {
  /* 최근 로또 번호를 제외한 근 3주치 데이터 */
  const { loading, data } = useAsync(getRecentWinNum, []);

  const recentData = data?.data?.results;

  if (loading) {
    return (
      <div className="mx-auto flex max-w-6xl items-center justify-center 3xl:max-w-8xl">
        <CircularProgress />
      </div>
    );
  }

  const theads = ["회차", "추첨일", "당첨 번호", "보너스 번호"];

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        최근 당첨 번호
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {theads.map((thead) => (
                <th
                  key={thead}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  {thead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {recentData.map((item) => (
              <tr key={item.drawRound}>
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-indigo-600">
                  {item.drawRound}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  {item.drawDate}
                </td>
                <td className="flex space-x-1 whitespace-nowrap px-4 py-4 text-sm text-white">
                  {convertNumtoArray(
                    item.num1,
                    item.num2,
                    item.num3,
                    item.num4,
                    item.num5,
                    item.num6
                  )?.map((num) => printNumbers(num))}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-white">
                  {printNumbers(item.bonusNum)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentWinNumTable;
