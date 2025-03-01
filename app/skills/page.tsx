"use client";
import { useSidebar } from "@/context/SidebarContext";
import SkillSection from "@/components/skills/SkillSection"
import React from "react";

const SkillsPage = () => {
  const { isSidebarOpen } = useSidebar();

  const fullstackSkills = [
    { name: "HTML", icon: "/assests/html-5.png" },
    { name: "CSS", icon: "/assests/css-3.png" },
    { name: "Sass", icon: "/assests/sass.png" },
    { name: "Bootstrap", icon: "/assests/bootstrap.png" },
    { name: "Tailwind", icon: "/assests/tailwind.png" },
    { name: "JavaScript", icon: "/assests/js.png" },
    { name: "jQuery", icon: "/assests/jquery-4.svg" },
    { name: "React", icon: "/assests/react.png" },
    { name: "Redux", icon: "/assests/redux.svg" },
    { name: "Next.js", icon: "/assests/nextjs.svg" },
    { name: "React Query", icon: "/assests/react-query.png" },
    { name: "Node.js", icon: "/assests/node.png" },
    { name: "Express.js", icon: "/assests/express-js.png" },
    { name: "MongoDB", icon: "/assests/mongodb.svg" },
    { name: "REST API", icon: "/assests/api.png" },
  ];

  const uiLibraries = [
    { name: "Material UI", icon: "/assests/material-ui.svg" },
    { name: "Chakra", icon: "/assests/chakra.png" },
    { name: "Daisy UI", icon: "/assests/daisyui.png" },
    { name: "ShadCN", icon: "/assests/shadcn.png" },
    { name: "Magic UI", icon: "/assests/magicui.svg" },
    { name: "Hero UI", icon: "/assests/nextui.svg" },
    { name: "Aceternity", icon: "/assests/aceternity.png" },
  ];

  const tools = [
    { name: "VS Code", icon: "/assests/vscode.png" },
    { name: "Git", icon: "/assests/git.png" },
    { name: "GitHub", icon: "/assests/github.png" },
    { name: "Postman", icon: "/assests/postman.svg" },
    { name: "Cloudinary", icon: "/assests/cloudinary.svg" },
    { name: "Vite", icon: "/assests/vite.png" },
    { name: "Vercel", icon: "/assests/vercel.svg" },
    { name: "Netlify", icon: "/assests/netlify.svg" },
    { name: "Appwrite", icon: "/assests/appwrite.png" },
    { name: "NextAuth", icon: "/assests/nextauth.png" },
    { name: "Clerk", icon: "/assests/clerk.webp" },
    { name: "JWT", icon: "/assests/jwt.svg" },
  ];

  return (
    <main className={`${isSidebarOpen ? "ml-80" : "ml-12"} mt-20 pb-20`}>
      <h1 className="text-4xl font-bold">My Advantages</h1>
      <p className="text-sm text-gray-300 leading-6 mt-3">
        I bring a unique blend of creativity and technical expertise, ensuring
        visually stunning and highly functional web applications.
      </p>

      <SkillSection title="Fullstack Development" skills={fullstackSkills} />
      <SkillSection title="UI Library" skills={uiLibraries} />
      <SkillSection title="Tools" skills={tools} />
    </main>
  );
};

export default SkillsPage;
