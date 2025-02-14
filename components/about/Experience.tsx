"use client";
import React from 'react'

import { useTheme } from "next-themes";
import { MagicCard } from '../magicui/magic-card';


const Experience = () => {
  const experiences = [
    {
      company: "Frequent Research Fieldwork Solution Pvt Ltd",
      period: "Aug, 2023 - Mar, 2024",
      title: "Web Designer & Frontend Developer",
      description:
        "Played a pivotal role in crafting immersive and user-centric web experiences for company websites.",
    },
    {
      company: "AdmeC Multimedia",
      period: "Mar, 2023 - Jul, 2023",
      title: "Web Developer",
      description:
        "Highly skilled in frontend and backend development, specializing in React.js and Node.js. Proven track record of delivering high-quality, responsive websites.",
    },
    {
      company: "Sabo System Pvt Ltd",
      period: "May, 2018 - Apr, 2019",
      title: "Graphic Designer",
      description:
        "Versatile graphic designer with 1 year of experience translating ideas into captivating visual narratives.",
    },
  ];
   const { theme } = useTheme();
  return (
    <section className="flex-1">
      <h2 className="text-3xl font-bold mb-3">Experience</h2>
      <p className="text-sm text-gray-300">
        My professional background in frontend development, and web design has
        equipped me with the skills to create seamless websites and captivating
        digital experiences.
      </p>
      <div className="w-full mt-8 flex flex-col gap-7">
        {experiences.map((exp, index) => (
          <MagicCard
            key={index}
            className="p-6 text-left"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-300">{exp.company}</p>
            <p className="text-xs text-vscodeAccent italic">{exp.period}</p>
            <p className="text-sm mt-2">{exp.description}</p>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}

export default Experience