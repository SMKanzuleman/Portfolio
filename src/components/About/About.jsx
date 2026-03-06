import React from "react";
import ImgSection from "./ImgSection";
import IntoSection from "./IntoSection";
import Grid from "../Global/Grid";
import Heading from "../Global/Heading";
import Background from "../Global/Background";

const About = () => {
  return (
    <div className="w-full lg:w-full md:w-full  md:h-[60vh] lg:h-[70vh]">
      <Background>
        <div className="w-full h-full flex lg:flex-row flex-col gap-10">
          <ImgSection />
          <IntoSection />
        </div>
      </Background>
    </div>
  );
};

export default About;
