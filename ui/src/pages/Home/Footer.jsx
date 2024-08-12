import React from "react";
import GitHubImg from "../../assets/img/Github.png";

/**
 * @returns 메인 포트폴리오 페이지 FOOTER
 */
function Footer() {
  return (
    <div
      id="contact"
      className="bg-gray-900 py-10 font-SUIT-Regular text-white"
    >
      <p className="text-center text-2xl font-bold md:text-2xl lg:text-3xl">
        CONTAC
      </p>
      <div className="mt-10 flex flex-col items-center justify-center">
        <a
          href="https://github.com/msintacs/Portfolio"
          target="_blank"
          className="pb-3"
          rel="noreferrer"
        >
          <img
            src={GitHubImg}
            alt="GitHub"
            className="z-40 h-[50px] w-[50px] rounded-full border border-white bg-white"
          />
        </a>
        <div> msintacs@gmail.com </div>
        <div className="mt-5 text-sm text-gray-300">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://icons8.com/icon/AfM2kzPzTz6Q/portfolio"
          >
            favicon
          </a>
          &nbsp; designed by &nbsp;
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://icons8.com"
          >
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
