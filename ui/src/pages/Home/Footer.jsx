import React from "react";
import GitHubImg from "../../assets/img/Github.png";

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
        <a href="https://github.com/msintacs" className="pb-3">
          <img
            src={GitHubImg}
            alt="GitHub"
            className="z-40 h-[50px] w-[50px] rounded-full border border-white bg-white"
          />
        </a>
        <div> msintacs@gmail.com </div>
      </div>
    </div>
  );
}

export default Footer;
