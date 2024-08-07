import React, { useState, useEffect, useRef, useCallback } from "react";
import { object } from "./SkillsObject";

/* eslint-disable react/no-array-index-key */
// 이 컴포넌트에서는 무한 스크롤 효과를 위해 의도적으로 index를 key로 사용합니다.
function Skills() {
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);
  const requestRef = useRef();

  const animate = useCallback(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
      scrollElement.scrollLeft = 0;
    } else {
      scrollElement.scrollLeft += 2;
    }

    if (!isHovering) {
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [isHovering]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div id="skills" className="mt-20">
      <div className="wrapper overflow-hidden bg-yellow-400 py-10">
        <p className="pb-10 text-center font-SUIT-Regular text-xl font-bold text-black md:text-2xl lg:text-3xl">
          SKILLS
        </p>
        <div
          ref={scrollRef}
          className="flex items-center space-x-10 overflow-x-hidden py-8"
          style={{ width: `${object.length * 160}px` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...object, ...object].map((item, index) => (
            <div
              key={`${item.alt}-${index}`}
              className="flex-shrink-0 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="h-[200px] w-[200px] object-contain drop-shadow-xl filter"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
