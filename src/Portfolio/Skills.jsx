import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={28} /> },
      { name: "HTML", icon: <FaHtml5 size={28} /> },
      { name: "JavaScript", icon: <TbBrandJavascript size={28} /> },
      { name: "Tailwind", icon: <SiTailwindcss size={28} /> },
    ],
    color: "from-cyan-400 to-blue-400",
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={28} /> },
      { name: "Express", icon: <SiExpress size={28} /> },
    ],
    color: "from-green-400 to-emerald-400",
  },
  {
    category: "Database",
    skills: [{ name: "MongoDB", icon: <SiMongodb size={28} /> }],
    color: "from-purple-400 to-indigo-400",
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={28} /> },
      { name: "GitHub", icon: <FaGithub size={28} /> },
      { name: "Postman", icon: <SiPostman size={28} /> },
    ],
    color: "from-pink-400 to-rose-400",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-start px-4 py-12 md:py-16">
      <h2
        className="text-3xl font-serif md:text-4xl font-bold text-white mb-8 md:mb-12 mt-8 md:mt-12"
        data-aos="flip-down"
      >
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {skillsData.map((category, index) => (
          <div
            data-aos="zoom-right"
            key={index}
            className={`bg-gradient-to-br ${category.color} bg-opacity-20 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:-rotate-1 duration-300`}
          >
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, idx) => (
                <div
                  data-aos="zoom-in"
                  key={idx}
                  className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <div className="bg-white/10 rounded-full p-3 mb-2 shadow-sm">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
