import React from "react";
import { convertNumtoArray, printNumbers } from "../../utils/numUtils";

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

function OverviewContent({ recentData }) {
  const theads = ["회차", "추첨일", "당첨 번호", "보너스 번호"];

  return (
    <div className="p-6">
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
            {recentData.map((data) => (
              <tr key={data.drawRound}>
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-indigo-600">
                  {data.drawRound}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  {data.drawDate}
                </td>
                <td className="flex space-x-1 whitespace-nowrap px-4 py-4 text-sm text-white">
                  {convertNumtoArray(
                    data.num1,
                    data.num2,
                    data.num3,
                    data.num4,
                    data.num5,
                    data.num6
                  )?.map((num) => printNumbers(num))}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-white">
                  {printNumbers(data.bonusNum)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OverviewContent;
