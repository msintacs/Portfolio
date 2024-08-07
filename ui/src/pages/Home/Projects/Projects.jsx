import { Paper } from "@mui/material";
import React from "react";

function Projects() {
  return (
    <div id="projects" className="bg-custom-blue px-10 py-20">
      <p className="mb-10 text-center font-SUIT-Regular text-xl font-bold text-white md:text-2xl lg:text-3xl">
        PROJECTS
      </p>
      <Paper
        className="mx-auto h-[600px] w-[1100px] rounded-lg border bg-white"
        elevation={3}
      >
        테스트
      </Paper>
    </div>
  );
}

export default Projects;
