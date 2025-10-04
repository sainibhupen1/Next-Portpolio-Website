import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import Home from "../../public/Home3.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";

import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import Image from "next/image";

const HomePage = () => {
  const text = "Bhupendra Saini";
  const [displayText, setDisplayText] = useState("");
  const [reverse, setReverse] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!reverse) {
        if (index < text.length) {
          setDisplayText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        } else {
          setReverse(true);
        }
      } else {
        if (index > 1) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setReverse(false);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, [index, reverse]);
  return (
    <div id="home" className="md:pl-[100px] pt-[100px] md:pr-[100px] ">
      <div className="w-full   flex flex-col">
        <div className="pl-4 md:pl-0 md:flex  justify-center">
          <h1 className="font-signika text-[#2ca2d1] text-[40px]">Developer</h1>
        </div>
        <div className="md:flex justify-between pl-[20px] md:pl-[100px] pt-[50px] items-center">
          <div className=" md:hidden mb-8">
            <div className=" bg-gray-50  rounded-full w-[150px] h-[150px] md:w-[260px] md:h-[260px] flex  overflow-hidden border-2 border-[#a4a4df]">
              <Image
                src={Home}
                alt="img"
                className=" object-cover object-center pr-4"
              />
            </div>
          </div>

          <div>
            <h1 className="text-gray-700 text-[25px] md:text-[35px] font-notoSerif">
              Hey
            </h1>
            <h2 className="text-gray-700  text-[25px] md:text-[35px] font-notoSerif">
              I'm <span className="text-[#da5fbb] "> {displayText}|</span>
            </h2>
            <p className="text-gray-700 text-[25px] md:text-[35px] font-notoSerif">
              MERN-Stack Developer
            </p>
            <div className="flex items-center gap-2 pt-4">
              <p className="text-[#1584af] font-serif md:text-[23px]  cursor-pointer">
                Let's Talk{" "}
              </p>
              <p className="bg-gray-500 rounded-full p-1 text-white cursor-pointer">
                <Link smooth={true} duration={1000} to="contactus">
                  {" "}
                  <MdOutlineCameraAlt />
                </Link>
              </p>
            </div>
            <div className="pt-3 flex gap-3 items-center">
              <p className="text-[blue] cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/bhupendra-saini-964801239"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin size={20} />
                </a>
              </p>
              <p className="text-[blue] cursor-pointer">
                <TiSocialFacebookCircular size={20} />
              </p>
              <p className="text-[#f14444] cursor-pointer">
                <FaInstagram size={20} />
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" bg-gray-50  rounded-full w-[260px] h-[260px] flex  overflow-hidden border-2 border-[#a4a4df]">
              <Image
                src={Home}
                alt="img"
                className=" object-cover object-center pr-4"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[50px] border border-gray-200 md:mt-[150px]" />
    </div>
  );
};

export default HomePage;
