import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern personal portfolio to showcase my skills and projects.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    live: "https://example.com",
    github: "https://github.com/yourusername/portfolio",
    image: "/images/portfolio.png",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A full-stack e-commerce platform with payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://example.com",
    github: "https://github.com/yourusername/ecommerce",
    image: "/images/ecommerce.png",
  },
  {
    id: 3,
    title: "AI Summarizer",
    description: "An AI-powered tool to summarize articles instantly.",
    tech: ["React", "OpenAI API", "TailwindCSS"],
    live: "https://example.com",
    github: "https://github.com/yourusername/ai-summarizer",
    image: "/images/ai.png",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A blog platform with authentication & commenting.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://example.com",
    github: "https://github.com/yourusername/blog-platform",
    image: "/images/blog.png",
  },
  {
    id: 5,
    title: "Task Manager",
    description: "A task management app to track daily work.",
    tech: ["React", "Firebase", "TailwindCSS"],
    live: "https://example.com",
    github: "https://github.com/yourusername/task-manager",
    image: "/images/task.png",
  },
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(2);

  const toggleProjects = () => {
    setVisibleCount((prev) =>
      prev === 2 ? projects.length : 2
    );
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            My Projects
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Some of the projects I have built recently
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.slice(0, visibleCount).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group rounded-2xl overflow-hidden border
              border-slate-200 dark:border-slate-800
              bg-white dark:bg-slate-900
              shadow-lg hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm flex items-center gap-2"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md
                      bg-slate-100 dark:bg-slate-800
                      text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-12 text-center">
          <button
            onClick={toggleProjects}
            className="px-8 py-3 rounded-xl font-medium
            bg-slate-900 text-white hover:bg-slate-800
            dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200
            transition"
          >
            {visibleCount === 2 ? "View More Projects" : "Show Less"}
          </button>
        </div>
      </div>
    </section>
  );
}
