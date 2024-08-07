import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";

function Lotto() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarOnOff = () => {
    isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
  };

  return (
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
  );
}

export default Lotto;
