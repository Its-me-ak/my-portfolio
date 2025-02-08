import React from 'react'
import { VscVscode } from "react-icons/vsc";
const TopHeader = () => {
  return (
    <div className='flex justify-between items-center ps-2 bg-vscodeHeader fixed w-full h-6'>

      <ul className='flex list-none gap-3 capitalize items-center text-sm'>
        <li>
          <img src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png" alt="" className='h-5' />
        </li>
        <li>about</li>
        <li>Experience</li>
        <li>skills</li>
        <li>Projects</li>
        <li>contact</li>
        <li>hobbies</li>
      </ul>
      <div>
        <ul>
          <li>
            <svg width="100" height="28" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="30" fill="transparent" />
              {/* <!-- Back Arrow --> */}
              <polygon points="15,15 25,10 25,20" fill="white" />
              {/* <!-- Red Circle (Close) --> */}
              <circle cx="40" cy="15" r="6" fill="#FF5F57" />
              {/* <!-- Yellow Circle (Minimize) --> */}
              <circle cx="60" cy="15" r="6" fill="#FFBD2E" />
              {/* <!-- Green Circle (Maximize) --> */}
              <circle cx="80" cy="15" r="6" fill="#27C93F" />
            </svg>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopHeader