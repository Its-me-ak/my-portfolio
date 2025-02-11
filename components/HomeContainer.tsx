import React from 'react'
import { FiFilePlus } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Link from 'next/link';
const HomeContainer = () => {
  return (
    <div className="flex-1">
      <ul className="space-y-2">
        <h2 className="text-lg font-bold mb-2">Start</h2>
        <Link
          href={"/skills"}
          className="cursor-pointer text-vscodeAccent flex items-center gap-1 text-sm"
        >
          <FiFilePlus /> <span>Skills</span>
        </Link>
        <Link
          href={"/projects"}
          className="cursor-pointer text-vscodeAccent flex items-center gap-1 text-sm"
        >
          <FaRegFolderOpen /> <span>Projects</span>
        </Link>
        <Link
          href={"/anime"}
          className="cursor-pointer text-vscodeAccent flex items-center gap-1 text-sm"
        >
          <RiGitRepositoryCommitsLine /> <span>Anime</span>
        </Link>
        <Link
          href={"/contact"}
          className="cursor-pointer text-vscodeAccent flex items-center gap-1 text-sm"
        >
          <IoChatbubbleEllipsesOutline /> <span>Get In Touch</span>
        </Link>
      </ul>
      <ul className="space-y-1 mt-10">
        <h2 className="text-lg font-bold mb-2">Recent</h2>
        <li>
          <Link href={"/about"} className="text-sm cursor-pointer">
            <span className="text-vscodeAccent me-4">About</span>
            E:/Mohd-Aquib/About
          </Link>
        </li>
        <li>
          <Link href={"/gaming"} className="text-sm cursor-pointer">
            <span className="text-vscodeAccent me-4">Gaming</span>
            E:/Mohd-Aquib/Gaming
          </Link>
        </li>
        <li>
          <Link href={"/experience"} className="text-sm cursor-pointer">
            <span className="text-vscodeAccent me-4">Experience</span>
            E:/Mohd-Aquib/Experience
          </Link>
        </li>
        <li>
          <Link href={"/manga"} className="text-sm cursor-pointer">
            <span className="text-vscodeAccent me-4">Manga</span>
            E:/Mohd-Aquib/Manga
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeContainer