"use client";
import Education from "@/components/about/Educations";
import Experience from "@/components/about/Experience";
import Me from "@/components/about/Me";
import { useSidebar } from "@/context/SidebarContext";
import React from "react";
import GitHubCalendar from 'react-github-calendar';

const AboutPage = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"} mt-20 pb-20`}>
      <Me />
      <div className="flex lg:flex-row flex-col justify-between pt-16 gap-10">
        <Experience />
        <Education />
      </div>

      <div className="lg:w-full w-80 sm:w-[560px] md:w-[700px] pt-16">
        <h2 className="text-xl font-semibold mb-4 text-white">GitHub Contributions</h2>

        <div className="overflow-x-auto rounded-lg p-4 bg-[#122738]">
          <GitHubCalendar
            username="its-me-ak"
            blockSize={17}
            blockMargin={5}
            fontSize={14}
          />
        </div>
      </div>

    </main>
  );
};

export default AboutPage;
