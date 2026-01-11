import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const SKILLS = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        py-16 md:py-24
        bg-slate-50
        dark:bg-slate-950
        text-slate-900 dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Card Wrapper */}
        <div className="
          bg-white/70 dark:bg-slate-900/50
          backdrop-blur-md
          rounded-2xl
          shadow-xl
          p-8
          transition-colors duration-300
        ">
          
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
            <p className="mt-2 text-slate-600 dark:text-neutral-200 text-sm md:text-base">
              Technologies and tools I use regularly
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-10">
            {SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 w-32 hover:scale-110 transition-transform duration-300"
              >
                {skill.icon}
                <span className="font-medium text-lg">{skill.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
