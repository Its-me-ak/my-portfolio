import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "../magicui/magic-card";


const Education = () => {
    const { theme } = useTheme();
  
  interface EducationItemProps {
    institution: string;
    duration: string;
    title: string;
    description: string;
  }

  const educationData: EducationItemProps[] = [
    {
      institution: "Admec Multimedia",
      duration: "Nov, 2021 - Feb, 2023",
      title: "Web Master",
      description:
        "Embark on a comprehensive web development journey, mastering HTML, CSS, JavaScript, and frameworks like Bootstrap, Tailwind, React.js while honing design intuition and problem-solving prowess for dynamic, user-centric websites.",
    },
    {
      institution: "Siddharthnagar University",
      duration: "Jul, 2018 - May, 2021",
      title: "BA In Humanities",
      description:
        "Owing to advancements in product other designer technologies aute voluptate.",
    },
    {
      institution: "Arena Animation",
      duration: "Aug, 2017 - Apr, 2018",
      title: "Graphic Designing",
      description:
        "Unlock creative potential with a comprehensive Graphic Designing course, blending artistry with technical proficiency to craft compelling visual design.",
    },
  ];
  return (
    <section className="flex-1">
      <h2 className="text-3xl font-bold mb-3">Education</h2>
      <p className="text-sm text-gray-300 leading-6">
        Holding diploma in web development and graphic design, I combine
        technical proficiency with artistic creativity to deliver top-notch web
        projects.
      </p>
      <div className="w-full mt-8 flex flex-col gap-7">
        {educationData.map((edu, index) => (
          <MagicCard
            key={index}
            className="p-5 text-left"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <h3 className="text-xl font-semibold">{edu.title}</h3>
            <p className="text-sm text-gray-300">{edu.institution}</p>
            <p className="text-xs text-vscodeAccent italic">{edu.duration}</p>
            <p className="text-sm mt-2 text-justify leading-5">{edu.description}</p>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};

export default Education;
