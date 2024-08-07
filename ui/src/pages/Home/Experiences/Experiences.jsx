import React from "react";
import { object } from "./ExperiencesObject";

const separator = " · ";

function Experiences() {
  return (
    <div id="experiences" className="mt-28">
      <p className="mb-10 text-center font-SUIT-Regular text-xl font-bold text-black md:text-2xl lg:text-3xl">
        EXPERIENCES
      </p>

      {object.map((item) => (
        <div
          key={item.company}
          className="mx-auto flex max-w-[1000px] px-4 py-8 font-SUIT-Regular"
        >
          <div className="flex-[3.5]">
            <div className="mb-2 flex items-center pt-6 text-xl font-bold">
              <span className="pe-4">{item.company}</span>
            </div>
            <div className="text-sm">{item.duration}</div>
          </div>
          <div className="flex-[6.5] rounded-xl bg-gray-100 px-11 py-8 text-sm">
            <div className="flex-auto pb-5 text-xs text-gray-500">
              <span>{item.part + separator}</span>
              <span>{item.career + separator}</span>
              <span>{item.job}</span>
            </div>
            {item.content.map((cont) => (
              <React.Fragment key={cont.no}>
                <span>{cont.text}</span> <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
