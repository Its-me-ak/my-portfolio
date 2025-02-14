import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const TopHeader = () => {
  return (
    <div className="flex justify-between items-center ps-2 bg-[#122738] fixed z-50 w-full h-7">
      <ul className="flex list-none gap-3 capitalize items-center text-sm text-gray-200">
        <Link href={"/"}>
          <Image
            src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
            alt="vs code logo"
            width={15}
            height={15}
          />
        </Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/experience"}>Experience</Link>
        <Link href={"/skills"}>skills</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>contact</Link>
        <Link href={"/hobbies"}>hobbies</Link>
      </ul>
      <div>
        <ul>
          <li>
            <svg
              width="100"
              height="28"
              viewBox="0 0 100 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="30" fill="transparent" />
              <polygon points="15,15 25,10 25,20" fill="white" />
              <circle cx="40" cy="15" r="6" fill="#FF5F57" />
              <circle cx="60" cy="15" r="6" fill="#FFBD2E" />
              <circle cx="80" cy="15" r="6" fill="#27C93F" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopHeader