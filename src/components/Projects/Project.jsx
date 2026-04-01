import React from 'react'
import Background from '../Global/Background'
import Heading from '../Global/Heading'
import ProjectCard from './ProjectCard';
const Project = () => {
  return (
    <Background height={80}>
      <Heading data={"Projects"} mb="20" />
      <div className="flex justify-center flex-wrap gap-5">
        <ProjectCard
          title="Age Calculator"
          description="An Age Calculator app with intersting life statistics."
          technologies={["React", "TailwindCSS", "JavaScript"]}
          image={"./calage.png"}
          liveLink="https://calage-kabidn9kq-smkanzulemans-projects.vercel.app/"
          githubLink="https://github.com/SMKanzuleman/AgeCalculator"
        />
        <ProjectCard
          title="Todo App"
          description="A simple Todo app with Cloud storage MongoDB."
          technologies={["React", "TailwindCSS", "JavaScript"]}
          image={"./todo.png"}
          liveLink="https://todo-frontend-plum-kappa.vercel.app/"
          githubLink="https://github.com/SMKanzuleman/Todo"
        />
        <ProjectCard />
        <ProjectCard />

      </div>
    </Background>
  );
};

export default Project
