import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {

  const { t } = useTranslation('common');

  return (
    <section className="bg-white py-20 dark:bg-slate-100" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src="/images/aboutP.jpeg"
          className="h-80 w-full object-cover opacity-80 rounded-lg shadow-md"
        />
        <article className="">
          <SectionTitle i18nKey="sections.aboutTitle" />
          <p className="text-slate-600 mt-8 leading-loose">
            {t('sections.aboutBody')}
          </p>
        </article>
      </div>
    </section>
  ); 
};

export default About;