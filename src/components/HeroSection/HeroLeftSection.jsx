import React from 'react'
import { Code2, Cpu, Globe, Zap } from "lucide-react"; 
import { FaGithub, FaReact, FaJs } from "react-icons/fa";
import Gbtn from '../Global/Gbtn';

const HeroLeftSection = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2">
      <h3 className="font-Inter text-2xl font-bold pl-3 -mb-1 tracking-widest">
        I'm
      </h3>
      <h1 className="text-7xl font-extrabold tracking-tight font-Outfit text-transparent bg-clip-text bg-linear-to-t from-teal-950 to-teal-200">
        KanzulEman
      </h1>

      <div className="absolute top-75 left-95 animate-float-slow opacity-80 text-yellow-500">
        <Code2 size={32} strokeWidth={2} />
      </div>
      <div className="absolute top-35 left-35 animate-float-slow opacity-80">
        <FaGithub size={30} />
      </div>
      <div>        <p className="text-xl font-Outfit font-bold  md:text-2xl text-purple-500">
          MERN Stack Developer
        </p>
      </div>
      <div>
        <p className="font-Inter text-1.5xl text-white">
          I build modern web applications from database design to user
          interface, delivering clean code, optimized performance, and <br />
          scalable architecture using the MERN stack.
        </p>
      </div>
      <div className="flex gap-3 mt-3">
        <Gbtn data="Resume" url="#" />
        <Gbtn data="Book Call" url="#" />
      </div>
    </div>
  );
}

export default HeroLeftSection
