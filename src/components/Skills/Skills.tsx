import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import { renderSkills } from './SkillsLib';
import { SKILLS } from '../../constants/data';

const Skills: React.FC = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
       {renderSkills(SKILLS)}
      </div>
    </section>
  );
};

export default Skills;
