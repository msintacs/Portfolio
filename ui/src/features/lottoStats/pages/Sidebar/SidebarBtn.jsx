import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * @param { Object } item : 메뉴 아이템 객체 (구조는 SidebarObject.jsx 참고)
 * @param { Function } handleOpen : 버튼 핸들러 (서브메뉴 온/오프 전환)
 * @param { boolean } isOpen : 현재 버튼 온/오프 상태
 * @param { boolean } isSidebarOpen : 사이드바 열림/닫힘 상태
 * @returns : 사이드바 메뉴 리스트
 */
function SidebarBtn({ item, handleOpen, isOpen, isSidebarOpen }) {
  const [subOpenStates, setSubOpenStates] = useState(
    Array(item.subMenu.length).fill(false)
  );

  const navigate = useNavigate(null);

  const handleClick = (index, href) => {
    if (isSidebarOpen) {
      setSubOpenStates((prev) => {
        const newStates = Array(prev.length).fill(false);
        newStates[index] = true;
        return newStates;
      });
      navigate(href);
    } else {
      handleOpen();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setSubOpenStates(Array(item.subMenu.length).fill(false));
    }
  }, [isOpen, item.subMenu.length]);

  return (
    <div>
      <button
        type="button"
        key={item.menuName}
        className={`group w-full rounded-3xl py-2 font-bold hover:bg-gray-800 hover:text-gray-50 ${
          isOpen ? "text-indigo-900" : ""
        } ${isSidebarOpen ? "px-5" : "px-[6px]"}`}
        onClick={() => (isSidebarOpen ? handleOpen() : handleClick(null, null))}
      >
        <div className="flex justify-between">
          <div>
            <span className={`pe-2 ${isSidebarOpen ? "" : "pe-0"}`}>
              {item.icon}
            </span>
            {isSidebarOpen && <span>{item.menuName}</span>}
          </div>
          {isSidebarOpen && (
            <div>
              <span className={isOpen ? "" : "hidden"}> • </span>
            </div>
          )}
        </div>
      </button>

      {isOpen && isSidebarOpen && (
        <Paper elevation={1} className="my-3 px-8 py-2">
          {item.subMenu?.map((sub, index) => (
            <button
              key={sub.subName}
              type="button"
              className="w-full text-left hover:font-bold"
              onClick={() => handleClick(index, sub.href)}
            >
              <div
                className={`mb-2 ${
                  subOpenStates[index] ? "font-bold text-indigo-950" : ""
                }`}
              >
                {sub.subName}
              </div>
            </button>
          ))}
        </Paper>
      )}
    </div>
  );
}

export default SidebarBtn;
