import React from "react";
import {
  FaPython,
  FaReact,
  FaDocker,
  FaDatabase,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import { SiKubernetes, SiTensorflow, SiOpencv, SiPostgresql } from "react-icons/si";

// Skills Data
const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C++", "Python", "JavaScript", "Java"],
    icon: FaPython,
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "TensorFlow", "OpenCV"],
    icon: FaReact,
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Kubernetes"],
    icon: FaDocker,
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    icon: FaDatabase,
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Teamwork", "Communication", "Leadership"],
    icon: SiTensorflow,
  },
];

const SkillsSection = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          My <span className="text-green-400">Skills</span>
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          A showcase of the technologies and tools I use to build impactful solutions.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="relative bg-zinc-800 rounded-2xl shadow-lg p-8 hover:scale-105 h transition-transform duration-300 ease-in-out"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 p-3 rounded-full text-black shadow-md">
              <category.icon className="text-3xl" />
            </div>

            {/* Category Header */}
            <h3 className="text-2xl font-semibold text-green-400 text-center mt-8 mb-4">
              {category.category}
            </h3>

            {/* Skills List */}
            <ul className="space-y-2 text-center">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="bg-zinc-700 text-white py-2 px-4 rounded-md hover:bg-green-500 hover:text-black transition duration-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
