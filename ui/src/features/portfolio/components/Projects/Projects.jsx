import React, { useState } from "react";
import { projectsData } from "./ProjectsData";
import TabButton from "./TabButton";

function Projects() {
  const [projects, setProjects] = useState(projectsData.projects);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  // 탭 클릭에 따른 프로젝트 상태변화
  const tabClick = (id) => {
    setProjects(
      projects.map((project) => ({
        ...project,
        isSelected: project.id === id,
      }))
    );

    setSelectedProject(
      projects.find((project) => project.id === id) || selectedProject
    );
  };

  return (
    <div className="my-20 w-full bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center font-medium text-blue-600">PORTFOLIO</p>
        <h2 className="mb-2 text-center font-SUIT-Heavy text-3xl">
          {projectsData.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          {projectsData.subTitle}
        </p>

        {/** 프로젝트 선택 탭 영역 */}
        <div className="mx-auto my-10 flex items-center justify-center gap-2">
          {projects.map((data) => (
            <TabButton
              key={data.id}
              title={data.title}
              isSelected={data.isSelected}
              tabClick={() => tabClick(data.id)}
            />
          ))}
        </div>

        {/** 프로젝트 컨텐츠 영역 */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500">
          <div className="relative h-[400px] overflow-hidden bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center bg-blue-600/20">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="h-full w-full object-cover opacity-80"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24">
              <h3 className="text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
