import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portfolio } from "./pages/portfolio";

/*
  구성 내용 : 페이지 라우팅
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        {/* Project. 1 
      <Route path="/lotto" element={<Lotto />}>
          <Route index element={<LottoMain />} />
          <Route path="stats">
            <Route path="year" element={<YearStats />} />
          </Route>
        </Route>
      */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
