import React from "react";
import SkillCard from "./SkillCard";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
const skills = [
  { name: "React", icon: FaReact },
  { name: "Express", icon: SiExpress },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: TbSql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "GitHub", icon: FaGithub },
  { name: "Git", icon: FaGitAlt },
  { name: "VS Code", icon: FaGitAlt },
];

const SkillsContainer = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="flex flex-wrap gap-5 justify-center">
        {skills.map((skill,index)=>(
          <SkillCard key={index} title={skill.name} Icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
