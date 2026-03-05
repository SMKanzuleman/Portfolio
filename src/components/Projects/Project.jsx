import React from 'react'
import Background from '../Global/Background'
import Heading from '../Global/Heading'
import ProjectCard from './ProjectCard';
const Project = () => {
  return (
    <Background height={80}>
      <Heading data={"Projects"} mb='20' />
      <div className="flex justify-center flex-wrap gap-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Background>
  );
};

export default Project
