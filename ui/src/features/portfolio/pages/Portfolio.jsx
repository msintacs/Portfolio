import React from "react";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import ProjectsSample from "../components/Projects/Projects-Sample";
// import TestPage from "./TestPage";

function Portfolio() {
  return (
    <main className="font-SUIT-Regular text-gray-900">
      <HeroSection />
      <AboutMe />
      <div className="mx-auto mb-16 w-40 border-t" />
      <Skills />
      <div className="mx-auto mb-16 w-40 border-t" />
      <Projects />
      <ProjectsSample />
    </main>
  );
}

export default Portfolio;
