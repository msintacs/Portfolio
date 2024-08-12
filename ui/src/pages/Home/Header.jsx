import React from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/**
 * @returns 메인 포트폴리오 페이지 HEADER
 */
export const link = [
  {
    href: "aboutMe",
    linkName: "ABOUT ME",
  },
  {
    href: "experiences",
    linkName: "EXPERIENCES",
  },
  {
    href: "skills",
    linkName: "SKILLS",
  },
  {
    href: "projects",
    linkName: "PROJETS",
  },
  {
    href: "career",
    linkName: "CAREER",
  },
  {
    href: "contact",
    linkName: "CONTACT",
  },
];

function Header() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed z-50 w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="logo">
            <a href="/" className="text-2xl font-bold text-black">
              <span className="text-3xl text-[#3333ff]">7iMsb</span>
            </a>
          </div>
          <nav>
            <ul className="flex space-x-8">
              {link.map((item) => (
                <li key={item.linkName}>
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.linkName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <Fab
        color="primary"
        aria-label="scroll back to top"
        sx={{
          position: "fixed",
          bottom: 20, // SpeedDial 위에 위치하도록 조정
          right: 20,
          bgcolor: "#3333ff", // SpeedDial과 같은 색상 사용
          "&:hover": {
            bgcolor: "#ff00cc", // 호버 시 색상
          },
        }}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  );
}

export default Header;
