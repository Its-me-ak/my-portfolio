"use client";
import { useState } from "react";
import { FaRegCopy, FaGithub, FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline, IoMail } from "react-icons/io5";
import {
  FaAngleDown,
  FaAngleRight,
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaNodeJs,
  FaCode
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const [openSections, setOpenSections] = useState<{
    about: boolean;
    contact: boolean;
    misc: boolean;
  }>({
    about: true,
    contact: true,
    misc: true,
  });


  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Left SideNav */}
      <div className="pt-10 pb-8 bg-[var(--sidebar-bg)] min-h-screen flex flex-col justify-between p-3 items-center fixed z-50">
        <div>
          <ul className="space-y-5">
            <li className="cursor-pointer" onClick={toggleSidebar}>
              <FaRegCopy className="text-2xl text-[var(--icon-color)] hover:text-[var(--text-color)]" />
            </li>
            <li>
              <Link href="/github">
                <FaGithub className="text-2xl text-[var(--icon-color)] hover:text-[var(--text-color)]" />
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <FaCode className="text-2xl text-[var(--icon-color)] hover:text-[var(--text-color)]" />
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <IoMail className="text-2xl text-[var(--icon-color)] hover:text-[var(--text-color)]" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <FaRegCircleUser className="text-2xl text-[var(--icon-color)] hover:text-[var(--text-color)]" />
              </Link>
            </li>
            <li>
              <Link href="/settings">
              <IoSettingsOutline className="text-2xl text-[var(--icon-color)] hover:text-[var(--text-color)]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed z-40 top-7 left-0 h-full w-64 bg-[var(--explorer-bg)] border-r border-[var(--explorer-border)] text-white transition-transform ${isSidebarOpen ? "translate-x-12" : "-translate-x-full"
          }`}
      >
        <h2 className="text-sm px-2 font-semibold mb-2 mt-2">EXPLORER</h2>

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
              <Link href={"/"}>
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center">
                  <FaHtml5 className="text-[#e65100]" />
                  <span className="ml-2">index.html</span>
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center my-2">
                  <FaCss3 className="text-[#42a5f5]" />
                  <span className="ml-2">about.css</span>
                </li>
              </Link>
              <Link href={"/skills"}>
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center my-2">
                  <SiJavascript className="text-[#f0db4f]" />
                  <span className="ml-2">skills.js</span>
                </li>
              </Link>
              <Link href={"/projects"} className="">
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center my-2">
                  <Image
                    src={
                      "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
                    }
                    alt="Python logo"
                    width={15}
                    height={15}
                  />
                  <span className="ml-2">projects.py</span>
                </li>
              </Link>
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
              <Link href={"/contact"}>
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center">
                  <MdEmail className="text-red-400" />
                  <span className="ml-2">Email.txt</span>
                </li>
              </Link>
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
              <Link href={"/gaming"}>
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center">
                  <FaNodeJs className="text-[#80bd00]" />
                  <span className="ml-2">Gaming.js</span>
                </li>
              </Link>
              <Link href={"/anime"}>
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center my-2">
                  <SiReact className="text-blue-400" />
                  <span className="ml-2">Anime.jsx</span>
                </li>
              </Link>
              <Link href={"/manga"}>
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center my-2">
                  <FaVuejs className="text-[#41b883]" />
                  <span className="ml-2">Manga.vue</span>
                </li>
              </Link>
              <Link href={"/learning"}>
                <li className="hover:bg-[var(--explorer-hover-bg)] cursor-pointer px-5 py-1 flex items-center my-2">
                  <SiTypescript className="text-[#007acc]" />
                  <span className="ml-2">Learning.tsx</span>
                </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
