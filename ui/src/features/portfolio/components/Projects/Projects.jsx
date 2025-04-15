import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover opacity-80"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24">
              <h3 className="text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-800/60 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="mb-6 text-gray-700">{selectedProject.summary}</p>

            <div className="mt-4 flex flex-col space-y-6 md:flex-row md:space-x-8 md:space-y-0">
              <div className="flex-1">
                <h4 className="mb-3 text-lg font-semibold"> 주요 기능 </h4>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {selectedProject.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="mb-3 text-lg font-semibold"> 사용 기술 </h4>
                <p className="text-gray-700">{selectedProject.description}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-gray-100 pt-8">
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700"
                >
                  <OpenInNewIcon /> <span className="ms-2"> Live Demo </span>
                </a>
              )}
              {selectedProject.codeLink && (
                <a
                  href="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-gray-100 px-6 py-3 text-gray-800 transition-all hover:bg-gray-200"
                >
                  <GitHubIcon /> <span className="ms-2">GitHub 코드 보기</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
