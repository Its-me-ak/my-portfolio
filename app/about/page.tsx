'use client'
import Me from "@/components/about/Me";
import { useSidebar } from "@/context/SidebarContext";
import React from "react";

const AboutPage = () => {
    const { isSidebarOpen } = useSidebar();
  return (
    <main className={`${isSidebarOpen ? 'ml-96' : 'ml-12'}  mt-20`}>
      <Me />
    </main>
  );
};

export default AboutPage;
