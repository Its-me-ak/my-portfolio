import Image from "next/image";

interface Skill {
    name: string;
    icon?: string;
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
      <div className="flex gap-5 flex-wrap">
        {skills.map((skill, index) => (
          <button key={index} className="skill_skill__oFitQ">
            {skill.icon && (
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                height={20}
                width={20}
              />
            )}
            {skill.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default SkillSection;
