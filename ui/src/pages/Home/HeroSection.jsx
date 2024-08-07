import React from "react";

function HeroSection() {
  return (
    <section className="bg-gray-100 py-20 text-black">
      <div className="container mx-auto text-center">
        <h1 className="relative text-11xl font-bold">
          <span className="relative z-10 block">PORT</span>
          <span className="relative z-30 -mt-20 block">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 rotate-[-5deg] transform font-ink-lipquid text-9xl text-lime-400">
              {"<Developer />"}
            </span>
          </span>
          <span className="relative z-20 -mt-10 block">FOLIO</span>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
