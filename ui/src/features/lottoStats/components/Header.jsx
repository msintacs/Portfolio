import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

/**
 * @param { boolean } isSidebarOpen : 사이드바 온/오프 Flag
 * @param { Function } handleSidebarOnOff : 사이드바 온/오프 제어 Function
 * @returns 프로젝트1 Lotto 메인 헤더
 */
function Header({ isSidebarOpen, handleSidebarOnOff }) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/lotto");
  };

  return (
    <div className="fixed z-50 flex h-[50px] w-screen justify-between bg-gray-800 font-SUIT-Regular text-xl text-gray-50 drop-shadow filter">
      <div className="flex items-center">
        <button
          type="button"
          className="px-5"
          onClick={handleSidebarOnOff}
          aria-label="menu"
        >
          {isSidebarOpen ? <ArrowBackIcon /> : <MenuIcon />}
        </button>
        <button type="button" className="text-2xl" onClick={goHome}>
          7iMsb
        </button>
      </div>
      <div className="flex items-center">
        <div className="text-lg">id</div>
        <button
          type="button"
          className="mx-5 rounded-2xl bg-gray-50 px-3 py-1 text-sm text-black hover:bg-red-600 hover:text-gray-50"
        >
          <PowerSettingsNewIcon sx={{ fontSize: "18px" }} />
          <span className="rounded-xl"> LOGOUT </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
