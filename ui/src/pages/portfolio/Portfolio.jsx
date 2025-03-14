import React from "react";
import { HeroSection } from "./components/HeroSection";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";

function Portfolio() {
  return (
    <main className="font-SUIT-Regular">
      <HeroSection />
      <AboutMe />
      <div className="mx-auto mb-16 w-40 border-t" />
      <Skills />
    </main>
  );
}

export default Portfolio;
