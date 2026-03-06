import React from "react";
import Background from "../Global/Background";
import Heading from "../Global/Heading";
import Form from "./Form";
import Leftsection from "./Leftsection";

const Contact = () => {
  return (
    <div className="h-[135vh] lg:h-[110vh]">
      <Background>
        <div className="mt-20 mb-10">
        <Heading data="Contact Me" mt="0" mb="0" />
        </div>
        <div className="flex lg:flex-row flex-col w-full h-full gap-10 lg:gap-0">
          <div className="flex flex-col w-full lg:w-[40%] justify-center items-center px-10">
            <Leftsection />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] justify-center items-center px-10">
            <Form />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Contact;
