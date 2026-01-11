import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { label: "Home", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="
        relative w-full
        bg-white text-slate-900
        dark:bg-slate-900 dark:text-neutral-200
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ritik Yadav
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-neutral-400 max-w-xs">
              Fullstack Developer crafting modern, scalable web experiences.
            </p>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </button>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ritiky886@gmail.com"
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-300 dark:bg-neutral-700/50" />

        {/* Bottom Text */}
        <div className="text-center text-sm text-slate-700 dark:text-neutral-400">
          © 2025 Ritik Yadav. All Rights Reserved.
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 md:bottom-10 md:right-10
            p-3 rounded-full bg-cyan-500 dark:bg-cyan-400 text-white
            shadow-lg
            flex items-center justify-center
            animate-scale-up-down
            transition-all
          "
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes scale-up-down {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-scale-up-down {
          animation: scale-up-down 1s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
