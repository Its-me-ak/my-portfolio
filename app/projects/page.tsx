"use client";
import React from "react";
import { useSidebar } from "@/context/SidebarContext";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sample Projects Array
const projects = [
  {
    id: 1,
    title: "X Clone",
    description:
      "A fully functional Twitter clone built with the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates key features such as real-time chat with Socket.io",
    image: "/assests/p0.png",
    technologies: ["Tailwind", "DaisyUI", "React",  "Node", "ExpressJS", "MongoDB", "Socket.io", "React Query",],
    liveLink: "https://twtter-mern-project.onrender.com/",
    githubLink: "https://github.com/Its-me-ak/twtter-mern-project",
  },
  {
    id: 2,
    title: "Movie App",
    description: "This project is a movie website built with React and Redux, and fetches data from the TMDB API to display movie details, cast, and crew information.",
    image: "/assests/p28.png",
    technologies: ["Tailwind", "React", "Redux Toolkit", "TMDB API", "Clerk"],
    liveLink: "https://yourmovieapp.com",
    githubLink: "https://github.com/yourgithub/movie-app",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "An e-commerce platform with payment integration.",
    image: "/assets/ecommerce.jpg",
    technologies: ["Next.js", "Stripe", "Tailwind"],
    liveLink: "https://yourecommerce.com",
    githubLink: "https://github.com/yourgithub/ecommerce",
  },
];

const ProjectPage = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`${isSidebarOpen ? "ml-80" : "ml-12"} mt-20 pb-20`}>
      <h1 className="text-4xl font-bold">Featured Projects</h1>
      <p className="text-sm text-gray-300 leading-6 mt-3">
        College and Side Projects for practice.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="relative p-[2px] rounded-lg">
            <BorderBeam duration={8} size={200} />
            <div className="bg-[#122738] rounded-lg shadow-md shadow-[#000]/[0.3] overflow-hidden">
              {/* Image Section */}
              <div className="w-full h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="responsive"
                  width={220}
                  height={140}
                  className="rounded-t-lg object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 text-white">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="text-xs leading-5 text-gray-300 my-2">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 my-2">
                  {project.technologies.map((tech, index) => (
                    <Button key={index}>
                      {tech}
                    </Button>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-3 flex justify-between items-center">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="text-xs text-vscodeAccent capitalize"
                  >
                    View Project
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="text-xs text-vscodeAccent capitalize"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
