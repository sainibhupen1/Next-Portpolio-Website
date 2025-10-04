import React from "react";
import { Link } from "react-scroll";
import img from "../../public/bname.png";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gray-200 fixed w-full md:w-full shadow flex justify-between p-2 items-center md:pl-8 md:pr-[100px] z-10">
      <h1 className=" items-center flex">
        {/* <span className="md:text-[20px] pr-2 text-[blue]">&lt;B&gt;</span> */}
        {/* <span className="first-letter:text-[#26c426] first-letter:text-[25px] md:first-letter:text-[35px] text-[#7c7f99] md:text-[25px] font-notoSerif">
          BHUPENDRA
        </span> */}
        <span className="flex ">
          <Image
            src={img}
            alt="img"
            className="w-[50px] md:w-[60px] h-[35px] md:h-[45px]"
          />{" "}
          <p className=" text-[#be4e9e] md:text-[30px] font-notoSerif -ml-[9px] md:-ml-3 md:pt-[5px] pt-[6px] text-[20px]">
            𝖍𝖚𝖕𝖊𝖓..
          </p>
        </span>
      </h1>
      <div className="hidden md:block">
        <ul className=" flex gap-8">
          <li className="text-gray-800  font-notoSerif text-[18px]">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className=" cursor-pointer hover:text-[blue]"
            >
              Home
            </Link>{" "}
          </li>
          <li className="text-gray-800  font-notoSerif text-[18px]">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              About Us
            </Link>{" "}
          </li>
          <li className="text-gray-800  font-notoSerif text-[18px]">
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              Projects
            </Link>{" "}
          </li>
          <li className="text-gray-800  font-notoSerif text-[18px]">
            <Link
              to="contactus"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              Contact Us
            </Link>{" "}
          </li>
          <li className="text-gray-800  font-notoSerif text-[18px]">
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              Skills
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-gray-200 text-black">
              <GiHamburgerMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px] p-4 bg-gray-400">
            <ul className=" flex flex-col gap-4">
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  Home
                </Link>{" "}
              </li>
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  About Us
                </Link>{" "}
              </li>
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="projects"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  Projects
                </Link>{" "}
              </li>
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="contactus"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  Contact Us
                </Link>{" "}
              </li>
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="skills"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  Skills
                </Link>{" "}
              </li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
