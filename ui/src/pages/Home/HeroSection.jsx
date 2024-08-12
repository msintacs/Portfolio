import React from "react";

/**
 * @returns 메인 포트폴리오 페이지 대표이미지
 */
function HeroSection() {
  return (
    <section className="bg-gray-100 py-20 text-black">
      <div className="container mx-auto pt-10 text-center">
        <h1 className="relative text-11xl font-bold leading-none">
          <span className="relative z-10 block">PORT</span>
          <span className="-mt-15 relative z-30 block">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] transform bg-custom-gradient bg-clip-text font-ink-lipquid text-[150px] text-transparent">
              {"<Developer />"}
            </span>
          </span>
          <span className="relative z-20 -mt-8 block">FOLIO</span>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
