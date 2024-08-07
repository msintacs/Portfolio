import React, { useState, useEffect } from "react";
import { object } from "./AboutMeObject";

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 100; // 요소가 나타나는 스크롤 위치
      const hidePosition = 50; // 요소가 사라지는 스크롤 위치 (위로 스크롤할 때)

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      } else if (scrollPosition < hidePosition) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="aboutMe" className="relative mx-auto bg-white">
      <div className="relative mx-auto max-w-[1000px] px-4 pt-20 sm:px-6 lg:px-8">
        {/* 스크롤 시 나타나는 요소 */}
        <div
          className={`absolute left-0 right-0 top-0 z-10 p-4 transition-all duration-500 ease-in-out ${
            isVisible
              ? "translate-y-0 transform opacity-100"
              : "-translate-y-full transform opacity-0"
          }`}
        >
          <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-center font-SUIT-Regular text-xl font-bold text-black md:text-2xl lg:text-3xl">
              ABOUT ME
            </p>
            <div className="mt-3 flex justify-center">
              <span className="animate-bounce-rotate my-3 text-4xl">👆</span>
            </div>
          </div>
        </div>

        {/* ABOUT ME 박스 */}
        <div className="mt-16 flex justify-center p-8">
          <div className="grid max-w-4xl grid-cols-3 gap-x-8 gap-y-6 text-xl text-black">
            {object.map((item) => (
              <div
                key={item.title}
                className="flex items-start font-SUIT-Regular"
              >
                <div className="mr-7 flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-bold">{item.title}</div>
                  <div>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
