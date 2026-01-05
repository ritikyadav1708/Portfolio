import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsSection from "./components/Skills";
import ContactForm from "./components/Contact";

const App = () => {
  const [isDark, setIsDark] = useState(true); // default dark

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setIsDark(false);
    else setIsDark(true); // default dark
  }, []);

  // Apply theme globally
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main>
        <About />
        <Experience />
        <Projects />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
