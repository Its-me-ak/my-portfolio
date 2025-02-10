"use client"
import { useState } from "react";
import {
  FaAngleDown,
  FaAngleRight,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import Image from "next/image";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    about: true,
    contact: true,
    misc: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-64 bg-vscodeSidebar text-gray-300 min-h-screen px-0 pb-4 pt-10">
      <h2 className="text-sm font-semibold mb-4">EXPLORER</h2>

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
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
              <FaHtml5 className="text-[#e34c26]" />
              <span className="ml-2">index.html</span>
            </li>
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
              <FaCss3 className="text-[#264de4]" />
              <span className="ml-2">about.css</span>
            </li>
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
              <SiJavascript className="text-[#f0db4f]" />
              <span className="ml-2">skills.js</span>
            </li>
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
              <SiTypescript className="text-[#007acc]" />
              <span className="ml-2">experirience.ts</span>
            </li>
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
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
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
              <MdEmail className="text-red-400" />
              <span className="ml-2">Email.tsx</span>
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
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
              <CgFileDocument className="text-gray-400" />
              <span className="ml-2">Gaming.txt</span>
            </li>
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
              <SiReact className="text-blue-400" />
              <span className="ml-2">Anime.jsx</span>
            </li>
            <li className="flex items-center hover:bg-[#333] cursor-pointer px-5 py-1">
              <SiAngular className="text-red-500" />
              <span className="ml-2">Learning.tsx</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
