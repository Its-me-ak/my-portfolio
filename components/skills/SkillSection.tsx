import Image from "next/image";
import Link from "next/link";

interface Skill {
    name: string;
    icon?: string;
    link?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillSection:React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <>
      <h3 className="mt-8 mb-4 text-lg font-semibold text-slate-300">
        {title}
      </h3>
      <div className="flex md:gap-5 gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <Link href={skill.link ?? "#"} target="_blank" key={index}>
            <button className="skill_skill__oFitQ">
              {skill.icon && (
                <Image
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  height={16}
                  width={16}
                />
              )}
              {skill.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SkillSection;
