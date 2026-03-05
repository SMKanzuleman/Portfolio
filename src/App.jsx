import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbarr/Navbar";
import About from "./components/About/About";
import MySkills from "./components/MySkills/MySkills";
import SkillCard from "./components/MySkills/SkillCard";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="bg-[#0a0a0a] h-screen text-white">
      <Navbar className="fixed top-0 z-50" />
      <HeroSection />
      <About />
      <MySkills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
