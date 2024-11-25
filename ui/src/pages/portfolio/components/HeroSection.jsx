import React, { useEffect, useState } from "react";
import KeyBox from "./KeyBox";

const boxes = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
];

const TEXT = "안녕하세요, 풀스택 개발자 김성봉입니다.";

function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [selectedBox, setSelectedBox] = useState(null);

  useEffect(() => {
    if (index >= TEXT.length) {
      return () => {};
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => prev + TEXT[index]);
      setIndex((prev) => prev + 1);

      // 무작위로 키 선택
      const randomIndex = Math.floor(Math.random() * boxes.length);
      setSelectedBox(boxes[randomIndex].id);

      // 키 누름 효과 리셋
      setTimeout(() => {
        setSelectedBox(null);
      }, 140);
    }, 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative h-screen w-full font-SUIT-Regular">
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50">
        <div className="relative mb-4 overflow-hidden rounded-lg border-2 border-blue-400 px-3">
          <div className="flex">
            {boxes.map((item) => (
              <div key={item.id} className="relative h-[50px] w-[50px]">
                <KeyBox
                  width={50}
                  height={50}
                  className={`transition-all duration-100 ${
                    selectedBox === item.id ? "absolute top-3" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">
            {displayText}
            <span className="animate-blink">|</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
