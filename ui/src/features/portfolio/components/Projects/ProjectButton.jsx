import React from "react";

function ProjectButton({ demoLink, codeLink }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-gray-100 pt-8">
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Demo 페이지로 이동"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Live Demo
        </a>
      )}
      {codeLink && (
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub 페이지로 이동"
          className="inline-flex items-center rounded-lg bg-gray-100 px-6 py-3 text-gray-800 transition-colors hover:bg-gray-200"
        >
          GitHub 코드 보기
        </a>
      )}
    </div>
  );
}

export default ProjectButton;
