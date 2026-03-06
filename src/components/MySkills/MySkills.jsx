import React from 'react'
import Background from '../Global/Background'
import Heading from '../Global/Heading'
import SkillCard from './SkillCard';
import SkillsContainer from './SkillsContainer';

const MySkills = () => {
  return (
    <Background height={80}>
      <div className='mt-10'></div>
      <Heading data={"My Skills"} />
      <SkillsContainer />
    </Background>
  );
}
export default MySkills
