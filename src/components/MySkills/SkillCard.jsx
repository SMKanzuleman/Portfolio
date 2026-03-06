import React from "react";

const SkillCard = ({ title, Icon }) => {
  return (
    <div className="group relative h-20 w-[170px] lg:w-[270px] cursor-pointer">
      <div className="relative h-full bg-gradient-to-br from-[#1a1220] to-[#0f0a15] rounded-2xl p-6 flex items-center justify-center overflow-hidden border border-purple-900/30 group-hover:border-purple-500/80 transition duration-500">
        <div className="flex items-center gap-3">
          <Icon size={25} className="text-accent" />
          <h1 className="font-Outfit text-md text-center lg:text-xl font-bold text-white">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;