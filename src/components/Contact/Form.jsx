import React from "react";

import Glow from "../Global/Glow";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

const Form = () => {
  return (
    <div className="group relative w-full lg:w-[80%] max-w-2xl mx-auto">
      <div className="relative bg-linear-to-br from-bg1 via-bg2 to-bg3 rounded-3xl p-8">
        <FormHeader />
        <FormBody />
      </div>
    </div>
  );
};

export default Form;
