import React from "react";
import { Paper } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useLottoContext } from "../../../context/LottoContext";
import EndTimeAlarm from "./EndTimeAlarm";
import WinningNumBox from "./WinningNumBox";
import WinRate from "./WinRate";

/**
 * @returns 사이드바 제외 메인 페이지 최상위 컴포넌트
 */
function LottoMain() {
  const { selectValue } = useLottoContext();

  return (
    <div className="h-full w-full bg-gray-100 pt-[70px] font-SUIT-Regular">
      <div className="mb-20 pe-20 ps-20">
        <div>
          <div className="mb-1 ms-1 text-xs text-gray-500">
            <button
              type="button"
              aria-label="refresh"
              className="me-2 transition-all duration-300 ease-in-out hover:rotate-180 hover:scale-110"
            >
              <RefreshIcon fontSize="small" />
            </button>
            Last update : 2024-08-20
          </div>
          <Paper className="py-5 pe-14 ps-28">
            <div className="flex w-full">
              <div className="w-[60%]">
                <WinningNumBox />
              </div>
              <div className="w-[40%]">
                <EndTimeAlarm LottoType={selectValue} />
              </div>
            </div>
          </Paper>
        </div>
        <WinRate />
      </div>
    </div>
  );
}

export default LottoMain;
