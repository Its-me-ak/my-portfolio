import React from "react";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative p-[2px] rounded-lg">
      <BorderBeam duration={8} size={200} />
      <div className="bg-[#122738] rounded-lg shadow-md shadow-[#000]/[0.3] overflow-hidden h-full">
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
        <div className="py-2 px-3 text-slate-200">
          <h2 className="text-lg font-bold">{project.title}</h2>
          <p className="text-xs leading-5 text-gray-300 my-1">{project.description}</p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 my-2">
            {project.technologies.map((tech) => (
              <Button key={tech} className="bg-vscodeHeader hover:bg-vscodeHeader">
                {tech}
              </Button>
            ))}
          </div>

          {/* Links */}
          <div className="mt-3 flex justify-between items-center">
            <Link href={project.liveLink} target="_blank" className="text-xs text-vscodeAccent capitalize font-semibold">
              View Project
            </Link>
            <Link href={project.githubLink} target="_blank" className="text-xs text-vscodeAccent capitalize font-semibold">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
