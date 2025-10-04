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
              My name is Bhupendra Saini, and I am from Dausa,Rajasthan. I have
              completed my graduation from Poornima University, Jaipur, in April
              2024. I passed my 10th grade with 73% and 12th grade with 90% from
              Science Campus School, Mandawar, Dausa. I am passionate about web
              development and have built a strong foundation in front-end
              technologies such as HTML, CSS, and JavaScript. I have
              successfully completed several projects where I applied these
              skills to create responsive and interactive websites. Currently, I
              am continuously learning new tools and frameworks like Tailwind
              CSS and React to enhance my development skills.and I have been
              working as a Frontend Developer at Sudotech. I am a quick learner
              who believes in learning from past mistakes and experiences.
              That’s all about me. Thank you!
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
