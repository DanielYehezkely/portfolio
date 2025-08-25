import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectsCard from './ProjectsCard/ProjectsCard';
import { PROJECTS } from '../../constants/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';


const Projects: React.FC = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        className="py-16"
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, 
          1280: { slidesPerView: 3 }, 
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={false}
      >
        {PROJECTS.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectsCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
