import React from "react";
import Background from "../Global/Background";
import Heading from "../Global/Heading";
import Form from "./Form";
import Leftsection from "./Leftsection";

const Contact = () => {
  return (
    <Background height="110">
      <Heading data="Contact Me" mt="50" mb="10" />
      <div className="flex w-full h-full">
        <div className="flex flex-col w-[40%] justify-center items-center px-10">
          <Leftsection />
        </div>
        <div className="flex flex-col w-[60%] justify-center items-center px-10">
          <Form />
        </div>
      </div>
    </Background>
  );
};

export default Contact;
