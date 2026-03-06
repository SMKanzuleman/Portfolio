import React from 'react'
import Heading from '../Global/Heading'

const IntoSection = () => {
  return (
    <div className=" w-full lg:w-[55%] h-full flex flex-col items-center justify-center px-7 lg:pr-20 selection:bg-yellow-600 mb-0 ">
      <div className='flex justify-center mt-15'>
      <Heading data="About Me" mb='20'/>
      </div>
      <p className="text-justify leading-normle lg:leading-relaxed font-Inter ">
        I’m Kanzuleman, a developer focused on building functional web
        applications using the MERN stack. My work centers on writing clean,
        maintainable code and understanding how data flows from the{" "}
        <b className="text-violet-600">MongoDB </b>
        database through to the <b className="text-violet-600 ">React</b>{" "}
        frontend. I approach development by building projects that solve
        specific problems. I’m comfortable working with{" "}
        <b className="text-violet-600">Node.js</b> and{" "}
        <b className="text-violet-600">Express</b> to build RESTful APIs, and I
        use <b className="text-violet-600">Tailwind CSS </b>
        to ensure interfaces are responsive and usable. My goal is to move
        beyond basic functionality to design systems that follow
        industry-standard patterns like MVC and secure{" "}
        <b className="text-violet-600">JWT</b> authentication.
      </p>
    </div>
  );
}

export default IntoSection
