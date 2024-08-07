import React from "react";
import { object } from "./CarrerObject";

/* eslint-disable react/no-array-index-key */
function Career() {
  return (
    <div id="career" className="bg-gray-200 px-10 pt-20">
      <p className="mb-20 text-center font-SUIT-Regular text-xl font-bold text-black md:text-2xl lg:text-3xl">
        CAREER
      </p>
      <div className="mx-auto max-w-[1000px] font-SUIT-Regular">
        {object.map((item, itemIndex) => (
          <div key={`${item.id}-main-${itemIndex}`} className="flex">
            <div className="flex-[3.5] border-r-[1px] border-gray-400 py-2">
              <div className="flex items-center px-8 text-3xl font-bold">
                {item.company}
                <span className="ps-3 text-xs text-gray-400">{item.job}</span>
              </div>
              <div className="px-8">{item.duration}</div>
            </div>
            <div className="flex-[6.5]">
              <div className="ms-10 border-b-[1px] border-gray-400">
                {item.introText.split("\n").map((line, lineIndex) => (
                  <React.Fragment key={`${item.id}-introText-${lineIndex}`}>
                    {line}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </div>
              {item.content.map((content, contentIndex) => (
                <React.Fragment key={`${item.id}-content-${contentIndex}`}>
                  <div className="mb-3 ms-10 mt-10 border-l-4 border-black ps-4">
                    {content.title}
                  </div>
                  <div className="ms-10 text-sm text-gray-500">
                    {content.projectDuration}
                  </div>
                  <ul className="mb-16 ms-14 mt-6 list-disc">
                    {content.mainText.split("\n").map((text, textIndex) => (
                      <li
                        key={`${item.id}-mainText-${contentIndex}-${textIndex}`}
                        className="mb-1"
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
