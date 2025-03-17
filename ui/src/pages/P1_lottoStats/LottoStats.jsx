import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./page/Sidebar";
import Header from "./page/Header";
import { LottoProvider } from "./context/LottoStatsContext";

/**
 * @returns 프로젝트1(Lotto) 최상위 컴포넌트로 하위 요소 return
 */
function Lotto() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarOnOff = () => {
    isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
  };

  return (
    <LottoProvider>
      <div className="flex h-screen flex-col">
        <Header
          isSidebarOpen={isSidebarOpen}
          handleSidebarOnOff={handleSidebarOnOff}
        />
        <div className="flex flex-1">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <main className="flex-1 overflow-auto pt-[50px]">
            <Outlet />
          </main>
        </div>
      </div>
    </LottoProvider>
  );
}

export default Lotto;
