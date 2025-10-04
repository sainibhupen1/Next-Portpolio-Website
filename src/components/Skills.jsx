import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGitSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGuilded } from "react-icons/fa6";

const Skills = () => {
  return (
    <div id="skills" className="w-full  overflow-x-hidden">
      <div>
        <h1 className="text-[#438584] text-center text-[28px] md:text-[35px] font-notoSerif underline mt-10 md:mt-5 mb-8">
          Skills*
        </h1>
      </div>
      <div className="px-4 md:px-[100px]">
        {/* Front-End Section */}
        <div>
          <div className="border-2 p-1 bg-gray-200 rounded-tr-2xl w-[100px] border-[#a0a0e6]">
            <h1 className="font-notoSerif text-[#c63e92]">Front-End</h1>
          </div>
          <div className="pt-10  p-4 flex flex-wrap justify-center md:justify-between gap-6">
            {[
              { icon: <FaHtml5 size={30} />, label: "HTML", color: "#ec4850" },
              { icon: <FaCss3Alt size={30} />, label: "CSS", color: "#3f409a" },
              { icon: <FaNodeJs size={30} />, label: "JS", color: "#a43f8e" },
              {
                icon: <FaReact size={30} />,
                label: "REACT JS",
                color: "#347ca0",
              },
              {
                icon: <SiNextdotjs size={30} />,
                label: "NEXT JS",
                color: "#5cda40",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div
                  className={`rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex items-center justify-center`}
                  style={{ backgroundColor: skill.color }}
                >
                  <p className="text-white">{skill.icon}</p>
                </div>
                <p
                  className="font-notoSerif text-[14px] md:text-[22px]"
                  style={{ color: skill.color }}
                >
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 mb-10">
          <hr className="border-t-2 border-dashed border-[#c6d85b]" />
        </div>

        {/* Back-End Section */}
        <div className="flex flex-wrap justify-between gap-10">
          <div className="w-full md:w-auto">
            <div className="border-2 p-1 bg-gray-200 rounded-tr-2xl w-[100px] border-[#a0a0e6]">
              <h1 className="font-notoSerif text-[#c63e92]">Back-End</h1>
            </div>
            <div className="pt-10 p-4 flex flex-wrap gap-6 justify-center">
              {[
                {
                  icon: <DiNodejs size={30} />,
                  label: "NODE JS",
                  color: "#5c6219",
                },
                {
                  icon: <SiExpress size={30} />,
                  label: "EXPRESS",
                  color: "#984563",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div
                    className={`rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex items-center justify-center`}
                    style={{ backgroundColor: skill.color }}
                  >
                    <p className="text-white">{skill.icon}</p>
                  </div>
                  <p
                    className="font-notoSerif text-[14px] md:text-[22px]"
                    style={{ color: skill.color }}
                  >
                    {skill.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="border-2 p-1 bg-gray-200 rounded-tr-2xl w-[100px] border-[#a0a0e6]">
              <h1 className="font-notoSerif text-[#c63e92]">Data-Base</h1>
            </div>
            <div className="pt-10 p-4 flex flex-wrap gap-6 justify-center">
              <div className="flex flex-col items-center gap-3 text-center">
                <div
                  className="rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex items-center justify-center"
                  style={{ backgroundColor: "#209292" }}
                >
                  <p className="text-white">
                    <DiMongodb size={30} />
                  </p>
                </div>
                <p
                  className="font-notoSerif text-[14px] md:text-[22px]"
                  style={{ color: "#209292" }}
                >
                  MONGO DB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10">
          <hr className="border-t-2 border-dashed border-[#c6d85b]" />
        </div>

        {/* Others Section */}
        <div>
          <div className="border-2 p-1 bg-gray-200 rounded-tr-2xl w-[100px] border-[#a0a0e6]">
            <h1 className="font-notoSerif text-[#c63e92]">Others</h1>
          </div>
          <div className="pt-10 p-4 flex flex-wrap justify-center md:justify-between gap-6">
            {[
              {
                icon: <RiTailwindCssFill size={30} />,
                label: "TAILWIND CSS",
                color: "#b5c57c",
              },
              {
                icon: <FaGuilded size={30} />,
                label: "MATERIAL UI",
                color: "#168914",
              },
              {
                icon: <FaGitSquare size={30} />,
                label: "GIT",
                color: "#ca5421",
              },
              {
                icon: <FaGithubSquare size={30} />,
                label: "GITHUB",
                color: "#347ca0",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div
                  className={`rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex items-center justify-center`}
                  style={{ backgroundColor: skill.color }}
                >
                  <p className="text-white">{skill.icon}</p>
                </div>
                <p
                  className="font-notoSerif text-[14px] md:text-[22px]"
                  style={{ color: skill.color }}
                >
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="mt-16 border border-gray-200 md:mt-[150px]" />
    </div>
  );
};

export default Skills;
