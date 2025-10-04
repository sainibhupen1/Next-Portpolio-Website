import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { AiFillProduct } from "react-icons/ai";
import { MdAssuredWorkload } from "react-icons/md";
import { TbDatabaseExport } from "react-icons/tb";
import img from "../../public/bname.png";

import { BiSolidContact } from "react-icons/bi";
import { MdUnsubscribe } from "react-icons/md";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Products",
      url: "#",
      icon: AiFillProduct,
      isActive: true,
    },

    {
      title: "Contact-user",
      url: "#",
      icon: BiSolidContact,
    },

    {
      title: "Subscribe-user",
      url: "#",
      icon: MdUnsubscribe,
    },
  ],
};

export function AppSidebar({ onSelectPage, ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <div className="w-full p-2 h-[64px] border-b border-gray-200 bg-gray-50 dark:border-[white]/5 dark:bg-[#181819]">
        <div className="flex items-center">
          <Image
            src={img}
            alt="img"
            className="w-[50px] md:w-[60px] h-[35px] md:h-[45px]"
          />{" "}
          <p className=" text-[#be4e9e] md:text-[30px] font-notoSerif -ml-[9px] md:-ml-3 md:pt-[5px] pt-[6px] text-[20px]">
            𝖍𝖚𝖕𝖊𝖓..
          </p>
        </div>
      </div>

      <SidebarContent className="bg-gray-50 text-black dark:bg-[#181819] font-medium dark:text-white pt-6 pl-1">
        <NavMain items={data.navMain} onSelectPage={onSelectPage} />
      </SidebarContent>
      {/* <SidebarFooter className="bg-white text-black dark:bg-[#181819] dark:text-white">
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
