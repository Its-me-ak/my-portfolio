"use client";
import Education from "@/components/about/Educations";
import Experience from "@/components/about/Experience";
import Me from "@/components/about/Me";
import { useSidebar } from "@/context/SidebarContext";
import React from "react";

const AboutPage = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"} mt-20 pb-20`}>
      <Me />
      <div className="flex lg:flex-row flex-col justify-between pt-16 gap-10">
        <Experience />
        <Education />
      </div>
    </main>
  );
};

export default AboutPage;
