import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Lotto from "../pages/Lotto/Lotto";
import LottoMain from "../pages/Lotto/LottoMain/LottoMain";
import YearStats from "../pages/Lotto/Stats/YearStats";

/**
 * 메인 실행 컴포넌트, 라우팅 담당 컴포넌트
 * @returns 컴포넌트 라우팅 결과
 */
function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Project. 1 */}
        <Route path="/lotto" element={<Lotto />}>
          <Route index element={<LottoMain />} />
          <Route path="stats">
            <Route path="year" element={<YearStats />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
