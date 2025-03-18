import React, { useState } from "react";
import { projectsData } from "./ProjectsData";

function Projects() {
  const [activeTab, setActiveTab] = useState(projectsData.projects[0].id);

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center font-medium text-blue-600">PORTFOLIO</p>
        <h2 className="mb-2 text-center font-SUIT-Heavy text-4xl font-bold">
          {projectsData.title}
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">
          {projectsData.subTitle}
        </p>

        {/* Project Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {projectsData.projects.map((project) => (
            <button
              key={project.id}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === project.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(project.id)}
              type="button"
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        {projectsData.projects
          .filter((project) => project.id === activeTab)
          .map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500"
            >
              <div className="relative h-[400px] overflow-hidden bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center bg-blue-600/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24">
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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
                <p className="mb-6 text-gray-700">{project.description}</p>

                <div className="mt-4 flex flex-col space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                  <div className="flex-1">
                    <h4 className="mb-3 text-lg font-semibold">주요 기능</h4>
                    <ul className="list-inside list-disc space-y-2 text-gray-700">
                      <li>데이터 시각화 및 통계 분석</li>
                      <li>사용자 친화적 인터페이스</li>
                      <li>실시간 데이터 업데이트</li>
                      <li>반응형 모바일 디자인</li>
                    </ul>
                  </div>

                  <div className="flex-1">
                    <h4 className="mb-3 text-lg font-semibold">사용 기술</h4>
                    <p className="text-gray-700">
                      본 프로젝트는 {project.technologies.join(", ")} 기술을
                      활용하여 개발되었습니다. 프론트엔드와 백엔드를 연결하는
                      RESTful API를 구현하였으며, 데이터베이스 설계와 최적화에
                      중점을 두었습니다.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-gray-100 pt-8">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </span>
                      Live Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-gray-100 px-6 py-3 text-gray-800 transition-all hover:bg-gray-200"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </span>
                      GitHub 코드 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        {projectsData.showMoreLink && (
          <div className="mt-12 text-center">
            <a
              href={projectsData.showMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <span>더 많은 프로젝트 보기</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
