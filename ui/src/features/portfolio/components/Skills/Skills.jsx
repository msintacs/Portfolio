import React from "react";
import { skillsData } from "./SkillsData";
import SkillCards from "./SkillCards";

function Skills() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-2 text-center font-SUIT-Heavy text-3xl">
        {skillsData.title}
      </h2>
      <p className="mb-10 text-center text-gray-600">{skillsData.subTitle}</p>
      <SkillCards category="Frontend" data={skillsData.frontend} />
      <SkillCards category="Backend" data={skillsData.backend} />
      <SkillCards category="Database" data={skillsData.database} />
      <SkillCards category="Server" data={skillsData.server} />
      <SkillCards category="Tools" data={skillsData.tools} />
    </div>
  );
}

export default Skills;
