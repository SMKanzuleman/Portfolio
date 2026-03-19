import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Glow from "../Global/Glow";
import heroImage from "./hero.jpg";

const ProjectCard = ({
  title = "Project Title",
  description = "Project description goes here",
  image = heroImage,
  technologies = ["React", "Tailwind"],
  liveLink = "#",
  githubLink = "#",
}) => {
  return (
    <div className="group relative w-70 h-100 cursor-pointer">
      <Glow />
      <div className="relative bg-linear-to-br from-bg1 via-bg2 to-dark-card rounded-3xl p-6 border border-purple-900/30 group-hover:border-purple-500/70 transition duration-500 overflow-hidden h-full flex flex-col">
        <div className="relative w-full h-full rounded-2xl overflow-hidden mb-5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="font-Outfit text-2xl font-bold text-white group-hover:text-purple-300 transition duration-300">
            {title}
          </h2>
          <p className="font-Inter text-sm text-slate-400 line-clamp-2 group-hover:text-slate-300 transition duration-300">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-Inter text-purple-300 bg-purple-900/20 rounded-full border border-purple-800/40 group-hover:border-purple-600/60 group-hover:bg-purple-900/30 transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mt-5 pt-4 border-t border-purple-900/20">
          <a
            href={liveLink}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-linear-to-r from-purple-600/20 to-purple-600/10 hover:from-purple-600/40 hover:to-purple-600/30 text-purple-300 font-Inter font-semibold text-sm transition duration-300 border border-purple-700/30 hover:border-purple-600/60"
          >
            <ExternalLink size={16} />
            Live
          </a>
          <a
            href={githubLink}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-linear-to-r from-slate-700/20 to-slate-700/10 hover:from-slate-700/40 hover:to-slate-700/30 text-slate-300 font-Inter font-semibold text-sm transition duration-300 border border-slate-700/30 hover:border-slate-600/60"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
