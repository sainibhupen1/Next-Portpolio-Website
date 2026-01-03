import React from "react";
import about from "../../public/About.jpg";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div id="about" className="md:pl-[100px] md:pr-[100px] pt-[80px]">
      <div className="md:flex justify-between items-center">
        <div className="p-4">
          <div className="border-2 p-1 bg-gray-200 rounded-tr-2xl w-[100px] border-[#a0a0e6]">
            <h1 className="font-notoSerif text-[#c63e92]">About Me</h1>
          </div>
          <div className="mt-6 border  p-2 rounded-tr-2xl rounded-bl-2xl bg-gray-100 shadow">
            <p className="md:w-[500px] font-serif text-[14px] text-gray-600">
              {" "}
              I am Bhupendra Saini, a Web Developer from Dausa, Rajasthan. I
              completed my BCA from Poornima University, Jaipur, in April 2024.
              I have a strong interest in front-end development and hands-on
              experience with HTML, CSS, JavaScript, React.js, Next.js, Tailwind
              CSS, Bootstrap, Git, and GitHub.
              <br />
              <br /> Currently, I am working as a Web Developer at Samy Media
              Pvt. Ltd. since March 2025, where I focus on building responsive,
              user-friendly websites and optimizing web application performance.
              Alongside my professional work, I am actively learning backend
              technologies such as Node.js, Express.js, MongoDB, and Data
              Structures & Algorithms (DSA) to strengthen my problem-solving
              skills and move towards becoming a full-stack developer.
              <br />
              <br /> I am always eager to learn new technologies, take on
              challenging projects, and contribute to meaningful digital
              solutions that create real-world impact.
            </p>
          </div>
        </div>
        <div className="md:pt-[75px] pt-[50px] md:p-0 p-2">
          <Image
            src={about}
            alt="about"
            className="md:w-[350px] md:h-[200px]"
          />
        </div>
      </div>
      <hr className="mt-[50px] border border-gray-200 md:mt-[150px]" />
    </div>
  );
};

export default Aboutus;
