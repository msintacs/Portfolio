import React from "react";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

function Portfolio() {
  return (
    <main className="font-SUIT-Regular text-gray-900">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}

export default Portfolio;
