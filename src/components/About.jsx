import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="about"
      className="
        relative min-h-screen flex items-center justify-center
        px-6 overflow-hidden bg-slate-950 text-white pt-28 sm:pt-32 md:pt-36 lg:pt-0
      "
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            color: { value: ["#22d3ee", "#38bdf8", "#a855f7"] },
            size: { value: 2 },
            opacity: { value: 0.4 },
            move: { enable: true, speed: 0.6 },
            links: { enable: true, color: "#38bdf8", opacity: 0.3, distance: 120 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-5 py-1.5 text-sm rounded-full bg-cyan-500/10 text-cyan-400"
        >
          Fullstack Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold mb-6"
        >
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Ritik Yadav
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-2xl text-slate-400 mb-8"
        >
          Building the future with Web & AI
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto text-slate-300 mb-12"
        >
          Passionate developer focused on crafting modern web experiences,
          automation, and scalable UI solutions. Always learning, always building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
          >
            View Projects <ArrowRight size={18} />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition-transform"
          >
            Contact Me
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
          >
            <FileText size={18} /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
