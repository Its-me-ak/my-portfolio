"use client";
import { useSidebar } from "@/context/SidebarContext";
import SkillSection from "@/components/skills/SkillSection"
import React from "react";

const SkillsPage = () => {
  const { isSidebarOpen } = useSidebar();

  const fullstackSkills = [
    { name: "HTML", icon: "/assests/html-5.png", link: "https://html.com/" },
    {
      name: "CSS",
      icon: "/assests/css-3.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { name: "Sass", icon: "/assests/sass.png", link: "https://sass-lang.com/" },
    {
      name: "Bootstrap",
      icon: "/assests/bootstrap.png",
      link: "https://getbootstrap.com/",
    },
    {
      name: "Tailwind",
      icon: "/assests/tailwind.png",
      link: "https://tailwindcss.com/",
    },
    {
      name: "JavaScript",
      icon: "/assests/js.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "jQuery",
      icon: "/assests/jquery-4.svg",
      link: "https://jquery.com/",
    },
    {
      name: "React",
      icon: "/assests/react.png",
      link: "https://react.dev/",
    },
    {
      name: "Redux",
      icon: "/assests/redux.svg",
      link: "https://redux-toolkit.js.org/",
    },
    {
      name: "Next.js",
      icon: "/assests/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "React Query",
      icon: "/assests/react-query.png",
      link: "https://tanstack.com/query/latest",
    },
    {
      name: "Node.js",
      icon: "/assests/node.png",
      link: "https://nodejs.org/en",
    },
    {
      name: "Express.js",
      icon: "/assests/express.png",
      link: "https://expressjs.com/",
    },
    {
      name: "MongoDB",
      icon: "/assests/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "REST API",
      icon: "/assests/api.png",
      link: "https://blog.postman.com/rest-api-examples/",
    },
  ];

  const uiLibraries = [
    {
      name: "Material UI",
      icon: "/assests/material-ui.svg",
      link: "https://mui.com/",
    },
    {
      name: "Chakra",
      icon: "/assests/chakra.png",
      link: "https://chakra-ui.com/",
    },
    {
      name: "Daisy UI",
      icon: "/assests/daisyui.png",
      link: "https://daisyui.com/",
    },
    {
      name: "ShadCN",
      icon: "/assests/shadcn.png",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "Magic UI",
      icon: "/assests/magicui.svg",
      link: "https://magicui.design/",
    },
    {
      name: "Hero UI",
      icon: "/assests/nextui.svg",
      link: "https://www.heroui.com/",
    },
    {
      name: "Aceternity",
      icon: "/assests/aceternity.png",
      link: "https://ui.aceternity.com/",
    },
  ];

  const tools = [
    {
      name: "VS Code",
      icon: "/assests/vscode.png",
      link: "https://code.visualstudio.com/",
    },
    { name: "Git", icon: "/assests/git.png", link: "https://git-scm.com/" },
    {
      name: "GitHub",
      icon: "/assests/github.png",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assests/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Cloudinary",
      icon: "/assests/cloudinary.svg",
      link: "https://cloudinary.com/",
    },
    { name: "Vite", icon: "/assests/vite.png", link: "https://vite.dev/" },
    {
      name: "Vercel",
      icon: "/assests/vercel.svg",
      link: "https://vercel.com/",
    },
    {
      name: "Netlify",
      icon: "/assests/netlify.svg",
      link: "https://www.netlify.com/",
    },
        {
      name: "Render",
      icon: "/assests/render.svg",
      link: "https://render.com/",
    },
    {
      name: "Appwrite",
      icon: "/assests/appwrite.png",
      link: "https://appwrite.io/",
    },
    {
      name: "NextAuth",
      icon: "/assests/nextauth.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Clerk",
      icon: "/assests/clerk.webp",
      link: "https://clerk.com/",
    },
    { name: "JWT", icon: "/assests/jwt.svg", link: "https://jwt.io/" },
  ];

  return (
    <main className={`${isSidebarOpen ? "md:ml-80 ml-12" : "ml-12"}  mt-20 pb-20`}>
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
