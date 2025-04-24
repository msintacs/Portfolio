import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Portfolio } from "./features/portfolio/pages";

import { LottoStats } from "./features/lottoStats/pages";
import { Dashboard } from "./features/lottoStats/pages/Dashboard";
import DashboardRep1 from "./features/lottoStats/pages/Dashboard/tmp/DashboardRep1";
import DashboardRep2 from "./features/lottoStats/pages/Dashboard/tmp/DashboardRep2";
import DashboardRep3 from "./features/lottoStats/pages/Dashboard/tmp/DashboardRep3";

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
          <Route path="rep1" element={<DashboardRep1 />} />
          <Route path="rep2" element={<DashboardRep2 />} />
          <Route path="rep3" element={<DashboardRep3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
