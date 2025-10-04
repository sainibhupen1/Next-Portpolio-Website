import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import project1 from "../../public/proj-rest.jpg";
import project2 from "../../public/job-portal.webp";
import project3 from "../../public/text-utils.jpg";
import project4 from "../../public/resume.webp";
import Image from "next/image";

const project = [
  {
    img: project1,
    name: "Food-Restaurant",
    content:
      "This project is a complete Food-Restaurant website. It is made in complete MERN.It is designed for both restaurateurs and customers. You can create a restaurant from the restaurateur side, create a menu, confirm or pending the order placed from the customer side, or view the menu from the customer side. You can also order anything...",
    skills: "(MERN)",
    link: "https://restau-3ka1.onrender.com/",
  },
  {
    img: project2,
    name: "Job-portal",
    content:
      "This project is a complete job portal website. It is made in complete MERN. It is made for both student or recruiter. It is job post from recruiter account, apply accept, reject company, create or apply job from student account, search etc. is featured. This project has basically been created for learning or enhancing skills.",
    skills: "MERN",
    link: "https://job-portal-8wsk.onrender.com/",
  },
  {
    img: project3,
    name: "Text-utils",
    content:
      "This is a simple textutils website which is completely built in react js. This website has uppercase, lowercase and text copy to any text, remove extra spaces, and many other features.",
    skills: "React js",
    link: "https://sainibhupen1.github.io/text-count/",
  },
  {
    img: project4,
    name: "Create-resume-library",
    content:
      "This is entirely built using the MERN stack (MongoDB, Express, React, Node.js). The user can store a book with its price in the library, update it, or delete it. The user can create a resume and also update or download it.",
    skills: "MERN",
    link: "https://create-resume-library.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full md:pl-[100px] pl-2 md:pr-[100px]">
      <div>
        <h1 className="text-[#438584] md:text-[35px] font-notoSerif underline flex pl-6 text-[20px] md:pl-0 md:justify-center mt-[50px] md:mt-[20px] mb-[60px]">
          Projects*
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
        {project.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-tr-[100px] p-2  w-[320px] h-[350px] bg-gray-100 transform transition-transform duration-300 hover:-translate-y-2 shadow hover:bg-gray-200"
            >
              <div className="flex items-center justify-between pr-8">
                <Image
                  src={item.img}
                  alt=""
                  className="w-[230px] h-[100px] rounded-tr-[20px]"
                />
                <div className="text-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <p className="bg-gray-300 rounded-full p-1 text-[blue] cursor-pointer">
                      <MdOutlineCameraAlt />
                    </p>
                  </a>
                </div>
              </div>

              <h1 className="pt-1 cursor-default">
                <span className="text-[15px] font-merriweather  text-[#1b112b]">
                  Project-Name:-
                </span>
                <span className="text-center text-[#565691] font-serif">
                  {item.name}
                </span>
              </h1>
              <p className="font-garamond pt-1 text-[15px] text-gray-700  cursor-default">
                {item.content}
              </p>
              <h1 className="pt-1  cursor-default">
                <span className="text-[12px] font-merriweather  text-[#44448f]">
                  Skills:-
                </span>
                <span className="text-center text-[#44448f] font-merriweather text-[12px]">
                  {item.skills}
                </span>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
