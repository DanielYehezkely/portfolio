import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectsCard from './ProjectsCard/ProjectsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';

import { listProjects, Project } from '../../api/Projects';
import i18n from '../../i18n';

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState<Project[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [swiper, setSwiper] = React.useState<SwiperType | null>(null);

  React.useEffect(() => {
    listProjects()
      .then(setProjects)
      .catch((err) => setError(err.message));
  }, []);

  React.useEffect(() => {
    if (swiper) {
      swiper.update(); 
    }
  }, [i18n.language, swiper]);

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle i18nKey="sections.projectsTitle" />

      <div className="py-16">
        {error && <p className="text-red-600">{error}</p>}
        {!projects && !error && <p className="text-slate-500">Loading…</p>}
        {projects && projects.length === 0 && (
          <p className="text-slate-500">No projects yet.</p>
        )}

        {projects && projects.length > 0 && (
          <Swiper
            key={i18n.language}
            dir={i18n.dir()}
            onSwiper={setSwiper}
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
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <ProjectsCard
                  title={p.title}
                  text={p.text}
                  img={p.imgUrl || ''}
                  url={p.url || ''}
                  github={p.github || ''}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Projects;
