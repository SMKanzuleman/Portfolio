import React from 'react'
import { Code2, Cpu, Globe, Zap } from "lucide-react"; 
import { FaGithub, FaReact, FaJs } from "react-icons/fa";
import Gbtn from '../Global/Gbtn';

const HeroLeftSection = () => {
  return (
    <div className="w-full h-[50vh] mt-25 px-8 flex flex-col justify-center lg:gap-2 gap-3">
      <h3 className="font-Inter text-2xl font-bold pl-3 -mb-1 tracking-widest">
        I'm
      </h3>
      <h1 className="lg:text-7xl text-6xl font-extrabold tracking-tight font-Outfit text-transparent bg-clip-text bg-linear-to-t from-teal-950 to-teal-200">
        KanzulEman
      </h1>
      <div className="absolute lg:top-87 md:top-80 lg:left-90 md:left-74 left-63 top-67 animate-float-slow opacity-80 text-yellow-500">
        <Code2 size={32} strokeWidth={2} />
      </div>
      <div className="absolute lg:top-50 md:top-50 top-40 lg:left-35 left-23 animate-float-slow opacity-80">
        <FaGithub size={30} />
      </div>
      <div>        <p className="lg:text-xl text-[20px] font-Outfit font-bold  md:text-2xl text-purple-500">
          MERN Stack Developer
        </p>
      </div>
      <div>
        <p className="font-Inter lg:text-1.5xl text-[14px] text-white text-justify pr-10">
          I build modern web applications from database design to user
          interface, delivering clean code, optimized performance, and
          scalable architecture using the MERN stack.
        </p>
      </div>
      <div className="flex gap-3 lg:mt-3 mt-5">
        <Gbtn data="Resume" url="#" />
        <Gbtn data="Book Call" url="#" />
      </div>
    </div>
  );
}

export default HeroLeftSection
