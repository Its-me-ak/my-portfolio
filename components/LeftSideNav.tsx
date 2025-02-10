import React from "react";
import { FaRegCopy, FaGithub, FaRegCircleUser } from "react-icons/fa6";
import { VscSearch, VscSourceControl, VscExtensions } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
const LeftSideNav = () => {
  return (
    <div className="pt-10 bg-[#333] min-h-screen flex flex-col justify-between p-3 items-center">
      <div>
        <ul className="space-y-5">
          <li className="cursor-pointer">
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
  );
};

export default LeftSideNav;
