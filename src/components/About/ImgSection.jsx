import React from "react";

const ImgSection = () => {
  return (
    <div className="w-[45%] h-full flex flex-col items-center justify-center mt-5">
      <div className="relative w-70 h-70 group z-0">
        <div className="absolute -inset-1 bg-linear-to-b from-violet-600 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative w-full h-full">
          <img
            src="/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgSection;
