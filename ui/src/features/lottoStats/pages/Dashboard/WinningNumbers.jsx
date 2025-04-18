import React from "react";

import TextBox from "../../components/TextBox";

function WinningNumbers({ data, lottoKind }) {
  console.log("Lotto: ", data);

  return (
    <div className="mx-auto max-w-6xl 3xl:max-w-8xl">
      <div className="grid grid-cols-2 gap-7">
        <TextBox>
          <p className="text-sm font-medium text-gray-500">
            최신 회차 당첨 번호
          </p>
        </TextBox>
        <TextBox>
          <p className="text-sm font-medium text-gray-500">총 판매 금액</p>
        </TextBox>
      </div>
    </div>
  );
}

export default WinningNumbers;
