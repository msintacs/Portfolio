import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Portfolio } from "./features/portfolio/pages";

import { LottoStats } from "./features/lottoStats/pages";
import { Dashboard } from "./features/lottoStats/components/Dashboard";

/*
  구성 내용 : 페이지 라우팅
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        {/* Project. 1 */}
        <Route path="/lotto" element={<LottoStats />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
