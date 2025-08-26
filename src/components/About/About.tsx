import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const About: React.FC = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src="/images/aboutP.jpeg"
          className="h-80 w-full object-cover opacity-80 rounded-lg shadow-md"
        />
        <article className="">
          <SectionTitle i18nKey="sections.aboutTitle" />
          <p className="text-slate-600 mt-8 leading-loose">
            I started coding at the end of 2023 and fell for the rhythm of
            building: small ideas, quick iterations, sharper results. Then life
            called—reserve duty—twice. Each pause pulled me from the keyboard,
            but not from the craft. I kept notes, read docs on my phone, and
            sketched features I’d ship “when I’m back.” I finished a front-end
            course in between, served again until August 2025, and returned with
            more grit than before. Now I’m back — ready to learn fast,
            ship clean, and turn ideas into real products.
          </p>
        </article>
      </div>
    </section>
  ); 
};

export default About;