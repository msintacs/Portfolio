import React from "react";
import BasicTabs from "./BasicTab";

function LottoMain() {
  return (
    <div className="h-full w-full pt-20 font-SUIT-Regular">
      <div className="mb-20 ps-20">
        <div> 타이틀입니다. </div>
        <div> 안녕하세요 </div>
      </div>

      <BasicTabs />
      {/* <div className="mb-5 flex space-x-10 ps-20 font-bold text-gray-400">
        <button type="button" className="hover:text-blue-900">
          로또 6/45
        </button>
        <button type="button" className="hover:text-blue-900">
          연금복권 720+
        </button>
      </div> */}
    </div>
  );
}

export default LottoMain;
