import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = ({ isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "about" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Logo */}
      <h1
        className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        onClick={() => scrollToSection("about")}
      >
        Ritik Yadav
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative cursor-pointer text-slate-900 dark:text-slate-200 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme & Mobile */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="text-slate-900 dark:text-slate-200 hover:scale-110 transition"
        >
          {isDark ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 dark:text-slate-200"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-72 h-screen bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
            Menu
          </h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={26} className="text-slate-900 dark:text-slate-200" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left text-slate-900 dark:text-slate-200 hover:text-cyan-500 transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default Header;
