import React, { useState } from "react";
import { Paper } from "@mui/material";
import { menu } from "./SidebarObject";
import SidebarBtn from "./SidebarBtn";
import SidebarContentSeletor from "./SideBarContentSelector";

/**
 * @param { boolean } isSidebarOpen : 사이드바 온/오프 Flag
 * @param { Function } handleSidebarOnOff : 사이드바 온/오프 제어 Function
 * @returns 사이드바 전체 및 하위 서브메뉴 리스트
 */
function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpen = (index) => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
    } else {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  return (
    <Paper
      className={`sticky top-[50px] h-[calc(100vh-50px)] overflow-y-auto px-3 pt-4 font-SUIT-Regular transition-all duration-300 ${
        isSidebarOpen ? "w-[240px]" : "w-[60px]"
      }`}
      elevation={2}
    >
      {isSidebarOpen ? <SidebarContentSeletor /> : ""}

      {menu.map((item, index) => (
        <SidebarBtn
          key={item.menuName}
          item={item}
          isOpen={activeIndex === index}
          handleOpen={() => handleOpen(index)}
          isSidebarOpen={isSidebarOpen}
        />
      ))}
    </Paper>
  );
}

export default Sidebar;
