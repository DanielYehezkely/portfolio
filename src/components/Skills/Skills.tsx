import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Skills: React.FC = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
    </section>
  );
};

export default Skills;
