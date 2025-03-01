"use client";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import React from "react";

const SkillsPage = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <main className={`${isSidebarOpen ? "ml-80" : "ml-12"}  mt-20 pb-20`}>
      <h1 className="text-4xl font-bold">My Advantages</h1>
      <p className="text-sm text-gray-300 leading-6 mt-3">
        I bring a unique blend of creativity and technical expertise, ensuring
        visually stunning and highly functional web applications.
      </p>
      <h3 className="mt-8 mb-4 text-lg font-semibold text-slate-300">
        Fullstack Development
      </h3>
      <div className="flex gap-5 flex-wrap">
        <button className="skill_skill__oFitQ">
          {" "}
          <Image
            src={"/assests/html-5.png"}
            alt="html logo"
            height={18}
            width={18}
          />
          HTML
        </button>
        <button className="skill_skill__oFitQ">CSS</button>
        <button className="skill_skill__oFitQ">sass</button>
        <button className="skill_skill__oFitQ">Bootstrap</button>
        <button className="skill_skill__oFitQ">tailwind</button>
        <button className="skill_skill__oFitQ">JavaScript</button>
        <button className="skill_skill__oFitQ">jquery</button>
        <button className="skill_skill__oFitQ">react</button>
        <button className="skill_skill__oFitQ">redux</button>
        <button className="skill_skill__oFitQ">Nextjs</button>
        <button className="skill_skill__oFitQ">react query</button>
        <button className="skill_skill__oFitQ">Node</button>
        <button className="skill_skill__oFitQ">Express</button>
        <button className="skill_skill__oFitQ">mongodb</button>
        <button className="skill_skill__oFitQ">rest api</button>
      </div>
      <h3 className="mt-8 mb-4 text-lg font-semibold text-slate-300">
        UI Library
      </h3>
      <div className="flex gap-5 flex-wrap">
        <button className="skill_skill__oFitQ">
          <Image
            src={"/assests/html-5.png"}
            alt="html logo"
            height={18}
            width={18}
          />
          material ui
        </button>
        <button className="skill_skill__oFitQ">chakra</button>
        <button className="skill_skill__oFitQ">daisy ui</button>
        <button className="skill_skill__oFitQ">shadcn</button>
        <button className="skill_skill__oFitQ">Magic ui</button>
        <button className="skill_skill__oFitQ">heroui</button>
        <button className="skill_skill__oFitQ">Aceternity UI</button>
      </div>

      <h3 className="mt-8 mb-4 text-lg font-semibold text-slate-300">Tools</h3>
      <div className="flex gap-5 flex-wrap">
        <button className="skill_skill__oFitQ">
          <Image
            src={"/assests/html-5.png"}
            alt="html logo"
            height={18}
            width={18}
          />
          Vs code
        </button>
        <button className="skill_skill__oFitQ">Git</button>
        <button className="skill_skill__oFitQ">Github</button>
        <button className="skill_skill__oFitQ">postman</button>
        <button className="skill_skill__oFitQ">cloudinary</button>
        <button className="skill_skill__oFitQ">Vite</button>
        <button className="skill_skill__oFitQ">Vercel</button>
        <button className="skill_skill__oFitQ">Netlify</button>
        <button className="skill_skill__oFitQ">Appwrite</button>
        <button className="skill_skill__oFitQ">Nextauth</button>
        <button className="skill_skill__oFitQ">Clerk</button>
        <button className="skill_skill__oFitQ">JWT</button>
      </div>
    </main>
  );
};

export default SkillsPage;
