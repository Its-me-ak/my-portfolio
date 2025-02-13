import { useSidebar } from '@/context/SidebarContext';
import Image from 'next/image';
import React from 'react'

const Me = () => {
  const {isSidebarOpen} = useSidebar()
  return (
    <div className="flex gap-2 justify-between">
      <div className={`${isSidebarOpen ? "max-w-xl" : "max-w-4xl"}  text-justify`}>
        <h1>About Me</h1>
        <p>
          Hello! I’m <span className="font-bold">Mohd Aquib</span>. A passionate
          frontend developer with a flair for crafting immersive and visually
          appealing web experiences. Fluent in the languages of the web, I'm
          well-versed in HTML, CSS, SASS, BootStrap, JavaScript and WordPress. I
          have a strong command of modern frontend frameworks such as React, and
          I'm always eager to explore new tools and technologies that push the
          boundaries of what's possible on the web.
        </p>
      
      </div>
      <div>
        <Image src={"/assests/about.jpg"} alt="" height={400} width={400} />
      </div>
    </div>
  );
}

export default Me