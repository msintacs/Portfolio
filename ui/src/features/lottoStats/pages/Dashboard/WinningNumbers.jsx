import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import TextBox from "../../components/TextBox";
import { convertNumtoArray, printNumbers } from "../../utils/numUtils";

/**
 API Response Struct
 results: {
     drawData: "2025-04-19"
     drawRound: 1168
     num1: 9
     num2: 21
     num3: 24
     num4: 30
     num5: 33
     num6: 37
     bonusNum: 29
     totalSalesAmount: 117811795000
     fstIndvAmount: 2136635914
     fstTotalAmount: 27776266882
     fstWinCnt: 13
 }
 */
function WinningNumbers({ loading, lottoData }) {
  if (loading) {
    return (
      <div className="mx-auto flex max-w-6xl items-center justify-center 3xl:max-w-8xl">
        <CircularProgress />
      </div>
    );
  }

  const totalSalesAmount =
    lottoData.totalSalesAmount.toLocaleString("ko-KR") || "정보없음";

  const fstWinCnt = lottoData.fstWinCnt || 0;

  const fstIndvAmount =
    lottoData.fstIndvAmount.toLocaleString("ko-KR") || "정보없음";

  const mainNumbers = convertNumtoArray(
    lottoData.num1,
    lottoData.num2,
    lottoData.num3,
    lottoData.num4,
    lottoData.num5,
    lottoData.num6
  );

  const bonusNumber = lottoData.bonusNum;

  return (
    <div className="mx-auto max-w-6xl 3xl:max-w-8xl">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-[auto_1fr_1fr]">
        <TextBox>
          <p className="pb-7 text-sm font-medium text-gray-500">
            최신 회차 당첨 번호
            <span className="ps-3">({lottoData.drawDate})</span>
          </p>
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {mainNumbers.map((num) => printNumbers(num))}
            </div>
            <span className="px-5 text-xl font-bold"> + </span>
            <div> {printNumbers(bonusNumber)}</div>
          </div>
        </TextBox>
        <TextBox>
          <p className="pb-7 text-sm font-medium text-gray-500">총 판매 금액</p>
          <div className="text-right text-2xl">{`${totalSalesAmount}원`}</div>
        </TextBox>
        <TextBox>
          <p className="pb-4 text-sm font-medium text-gray-500">당첨 현황</p>
          <div className="space-y-1 text-right text-xl">
            <div>{`총 ${fstWinCnt}명`}</div>
            <div>{`각 ${fstIndvAmount}원`}</div>
          </div>
        </TextBox>
      </div>
    </div>
  );
}

export default WinningNumbers;
