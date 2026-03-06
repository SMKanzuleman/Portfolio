import React from "react";
import HeroRightSection from "./HeroRightSection";
import HeroLeftSection from "./HeroLeftSection";
import Background from "../Global/Background";

const HeroSection = () => {
  return (
    <Background height={120}>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(108, 43, 238, 0.15) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(45, 212, 191, 0.12) 0%, transparent 70%)",
            filter: "blur(150px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{
            background:
              "radial-gradient(circle, rgba(108, 43, 238, 0.05) 0%, rgba(45, 212, 191, 0.05) 50%, transparent 100%)",
            filter: "blur(100px)",
          }}
        />
      </div>
      <div className="relative z-50 flex w-full h-full flex-col lg:pl-28 lg:flex-row md:flex-row ">
        <div className="w-full lg:w-[45%] md:w-[50%] h-full flex flex-col items-start justify-center gap-3">
          <HeroLeftSection />
        </div>
        <div className="w-full lg:w-[55%] md:w-[50%] h-[40%] lg:h-full flex justify-center lg:items-center ">
          <HeroRightSection />
        </div>
      </div>
    </Background>
  );
};

export default HeroSection;
