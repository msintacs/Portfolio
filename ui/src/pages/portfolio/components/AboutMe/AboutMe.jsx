import React from "react";
import gitSvg from "../../../../assets/Portfolio/github.svg";
import { aboutMeData } from "./AboutMeData";

function AboutMe() {
  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-center text-3xl font-bold">
          {aboutMeData.title}
        </h2>
        <p className="mb-10 text-center text-gray-600">
          {aboutMeData.subTitle}
        </p>
        {/** 강조 문구 */}
        <p className="text -[17px] my-10 text-center font-bold text-blue-900">
          &quot;{aboutMeData.quote}&quot;
        </p>

        <div className="gird-cols-1 grid gap-8 md:grid-cols-2">
          {/** 왼쪽 영역 */}
          <div>
            <div className="h-[250px] w-[200px] bg-black" />
            <div className="mt-[60px]">
              <p className="mb-5 text-[14px]">{aboutMeData.description[0]}</p>
              <p className="mb-5 text-[14px]">{aboutMeData.description[1]}</p>
            </div>
          </div>

          {/** 오른쪽 영역 */}
          <div className="flex flex-col space-y-4">
            {/** Contact */}
            <div className="rounded-sm bg-slate-50 p-5">
              <h3 className="mb-3 text-xl font-semibold"> Contact </h3>
              <ul>
                <li>
                  <span className="mr-2">✉️</span>
                  <span className="mr-2">:</span>
                  {aboutMeData.contact.email}
                </li>
                <li className="flex items-center">
                  <img
                    src={gitSvg}
                    alt="Github SVG"
                    width="20"
                    className="mr-3.5"
                  />
                  <span className="mr-2">:</span>
                  <a
                    href={aboutMeData.contact.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {aboutMeData.contact.github.text}
                  </a>
                </li>
              </ul>
            </div>
            {/** Work Experience */}
            <div className="rounded-sm bg-slate-50 p-5">
              <h3 className="mb-3 text-xl font-semibold"> Work Experience </h3>
              {aboutMeData.experience.map((item) => (
                <div className="mb-4" key={item.id}>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    {item.company} | {item.period}
                  </p>
                  <ul className="mt-2 list-inside list-disc text-sm">
                    {item.responsibilities.map((li) => (
                      <li key={li.idx}>{li.text}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
