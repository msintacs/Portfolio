import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe/AboutMe";
import Experiences from "./Experiences/Experiences";
import Skills from "./SKills/Skills";
import Projects from "./Projects/Projects";
import Career from "./Carrer/Career";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Experiences />
      <Skills />
      <Projects />
      <Career />
      <Footer />
    </>
  );
}

export default Home;
