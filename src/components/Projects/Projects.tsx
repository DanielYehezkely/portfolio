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
      <SectionTitle i18nKey="sections.projectsTitle" />

      <div className="relative py-16">
        <Swiper
          
          dir="ltr"
          key="ltr" 
          modules={[Navigation, Pagination, Autoplay, A11y]}
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
          observer
          observeParents
        >
          {PROJECTS.map((p) => (
            <SwiperSlide key={p.id}>
              <ProjectsCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
