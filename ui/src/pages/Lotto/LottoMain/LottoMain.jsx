import React from "react";
import { useLottoContext } from "../../../context/LottoContext";
import Main645 from "./Lotto-645/Main645";
import Main720 from "./Lotto-720/Main720";

/**
 * @returns 사이드바 제외 메인 페이지 최상위 컴포넌트
 */
function LottoMain() {
  const { selectValue } = useLottoContext();

  return (
    <div className="h-full w-full bg-gray-100 pt-20 font-SUIT-Regular">
      <div className="mb-20 ps-20">
        {selectValue === 1 ? <Main645 /> : <Main720 />}
      </div>
    </div>
  );
}

export default LottoMain;
