import React from 'react'
import { FiFilePlus } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
const HomeContainer = () => {
  return (
      <div className='flex-1'>
          <ul className="space-y-2">
              <h2 className="text-lg font-bold mb-2">Start</h2>
              <li className="cursor-pointer text-vscodeAccent flex items-center gap-1 text-sm">
                  <FiFilePlus /> <span>Skills</span>
              </li>
              <li className="cursor-pointer text-vscodeAccent flex items-center gap-1 text-sm">
                  <FaRegFolderOpen /> <span>Projects</span>
              </li>
              <li className="cursor-pointer text-vscodeAccent flex items-center gap-1 text-sm">
                  <RiGitRepositoryCommitsLine /> <span>Anime</span>
              </li>
              <li className="cursor-pointer text-vscodeAccent flex items-center gap-1 text-sm">
                  <IoChatbubbleEllipsesOutline /> <span>Get In Touch</span>
              </li>
          </ul>
          <ul className="space-y-2 mt-10">
              <h2 className="text-lg font-bold mb-2">Recent</h2>
              <li className="text-sm cursor-pointer">
                  <span className="text-vscodeAccent me-4">Projects</span>
                  E:/Mohd-Aquib/Projects
              </li>
              <li className="text-sm cursor-pointer">
                  <span className="text-vscodeAccent me-4">Skills</span>
                  E:/Mohd-Aquib/Skills
              </li>
              <li className="text-sm cursor-pointer">
                  <span className="text-vscodeAccent me-4">Gaming</span>
                  E:/Mohd-Aquib/Gaming
              </li>
              <li className="text-sm cursor-pointer">
                  <span className="text-vscodeAccent me-4">Experience</span>
                  E:/Mohd-Aquib/Experience
              </li>
          </ul>
      </div>
  )
}

export default HomeContainer