import React from "react";
import { skillsData } from "./SkillsData";
import reactIcon from "../../../../assets/React.png";

function Skills() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-2 text-center text-3xl font-bold">
        {skillsData.title}
      </h2>
      <p className="mb-10 text-center text-gray-600">{skillsData.subTitle}</p>

      <div className="mb-8 flex items-center">
        <div className="mr-4 h-6 w-2 rounded-full bg-black" />
        <h3 className="text-2xl font-semibold">Frontend</h3>
        <div className="ml-4 flex-grow border-b" />
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/** React */}
        <div className="group relative overflow-hidden rounded-xl bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="relative z-10 flex flex-col items-center">
            <img src={reactIcon} width="50" alt="React PNG" className="mb-4" />
            <span className="text-center text-sm font-medium">React</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
