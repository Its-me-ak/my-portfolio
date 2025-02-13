"use client";
import { useState } from "react";
import { FaRegCopy, FaGithub, FaRegCircleUser } from "react-icons/fa6";
import { VscSearch, VscSourceControl, VscExtensions } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import {
  FaAngleDown,
  FaAngleRight,
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiPostman,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";

const Sidebar = () => {
  const {isSidebarOpen, toggleSidebar} = useSidebar()
  const [openSections, setOpenSections] = useState({
    about: true,
    contact: true,
    misc: true,
  });


  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Left SideNav */}
      <div className="pt-10 pb-8 bg-[#122738] min-h-screen flex flex-col justify-between p-3 items-center fixed ">
        <div>
          <ul className="space-y-5">
            <li className="cursor-pointer" onClick={toggleSidebar}>
              <FaRegCopy className="text-2xl" />
            </li>
            <li>
              <VscSearch className="text-2xl" />
            </li>
            <li>
              <VscSourceControl className="text-2xl" />
            </li>
            <li>
              <VscExtensions className="text-2xl" />
            </li>
            <li>
              <SiPostman className="text-2xl" />
            </li>
            <li>
              <FaGithub className="text-2xl" />
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <FaRegCircleUser className="text-2xl" />
            </li>
            <li>
              <IoSettingsOutline className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`w-64 ${
          isSidebarOpen ? "" : "hidden"
        } bg-vscodeSidebar text-gray-300 min-h-screen px-0 pb-4 pt-10 fixed left-12 `}
      >
        <h2 className="text-sm px-2 font-semibold mb-4">EXPLORER</h2>

        {/* About Section */}
        <div>
          <button
            className="flex items-center w-full text-left py-1 px-2"
            onClick={() => toggleSection("about")}
          >
            {openSections.about ? <FaAngleDown /> : <FaAngleRight />}
            <span className="ml-2">About</span>
          </button>
          {openSections.about && (
            <ul className=" space-y-2 text-sm">
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/"} className="flex items-center">
                  <FaHtml5 className="text-[#e65100]" />
                  <span className="ml-2">index.html</span>
                </Link>
              </li>
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/about"} className="flex items-center">
                  <FaCss3 className="text-[#42a5f5]" />
                  <span className="ml-2">about.css</span>
                </Link>
              </li>
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/skills"} className="flex items-center">
                  <SiJavascript className="text-[#f0db4f]" />
                  <span className="ml-2">skills.js</span>
                </Link>
              </li>
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/experience"} className="flex items-center">
                  <SiTypescript className="text-[#007acc]" />
                  <span className="ml-2">experience.ts</span>
                </Link>
              </li>
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/projects"} className="flex items-center">
                  <Image
                    src={
                      "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
                    }
                    alt="Python logo"
                    width={15}
                    height={15}
                  />
                  <span className="ml-2">projects.py</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Contact Section */}
        <div>
          <button
            className="flex items-center w-full text-left px-2 py-1 mt-2"
            onClick={() => toggleSection("contact")}
          >
            {openSections.contact ? <FaAngleDown /> : <FaAngleRight />}
            <span className="ml-2">Contact</span>
          </button>
          {openSections.contact && (
            <ul className="space-y-2 text-sm">
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/contact"} className="flex items-center">
                  <MdEmail className="text-red-400" />
                  <span className="ml-2">Email.txt</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Misc Section */}
        <div>
          <button
            className="flex items-center w-full text-left py-1 px-2 mt-2"
            onClick={() => toggleSection("misc")}
          >
            {openSections.misc ? <FaAngleDown /> : <FaAngleRight />}
            <span className="ml-2">Other Interest</span>
          </button>
          {openSections.misc && (
            <ul className="space-y-2 text-sm">
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/gaming"} className="flex items-center">
                  <FaNodeJs className="text-[#80bd00]" />
                  <span className="ml-2">Gaming.js</span>
                </Link>
              </li>
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/anime"} className="flex items-center">
                  <SiReact className="text-blue-400" />
                  <span className="ml-2">Anime.jsx</span>
                </Link>
              </li>
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/manga"} className="flex items-center">
                  <FaVuejs className="text-[#41b883]" />
                  <span className="ml-2">Manga.vue</span>
                </Link>
              </li>
              <li className=" hover:bg-[#0d3a58] cursor-pointer px-5 py-1">
                <Link href={"/learning"} className="flex items-center">
                  <SiAngular className="text-red-500" />
                  <span className="ml-2">Learning.tsx</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
