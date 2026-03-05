import React from "react";
import ImgSection from "./ImgSection";
import IntoSection from "./IntoSection";
import Grid from "../Global/Grid";
import Heading from "../Global/Heading";
import Background from "../Global/Background";

const About = () => {
  return (
    <Background height={70}>
      <div className="w-full h-full flex gap-10">
        <ImgSection />
        <IntoSection />
      </div>
    </Background>
  );
};

export default About;
