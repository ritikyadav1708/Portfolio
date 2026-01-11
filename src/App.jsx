import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsSection from "./components/Skills";
import ContactForm from "./components/Contact";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme !== "light"); // default dark
  }, []);

  // Apply theme globally to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen transition-colors duration-300">
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
