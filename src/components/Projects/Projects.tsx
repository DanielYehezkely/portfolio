import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectsCard from './ProjectsCard/ProjectsCard';

import { PROJECTS } from '../../constants/data';

const Projects: React.FC = () => {
  return (
  <section className='py-20 align-element' id='projects'>
    <SectionTitle text='web creations'/>
    <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {
        PROJECTS.map((project) => {
          return <ProjectsCard key={project.id} {...project}/>
        })
      }
    </div>
  </section>
  )
};

export default Projects;
