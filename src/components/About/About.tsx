import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const About: React.FC = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src="/images/IMG_20200716_012746.jpg" className="h-full rounded-full" />
        <article className="">
          <SectionTitle text="code and coffee"/>
        <p className="text-slate-600 mt-8 leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam, iste quaerat quibusdam eos quo non rem provident enim corporis ducimus sit eveniet mollitia autem veniam nobis, debitis quod quos. Repudiandae consequuntur dicta mollitia dolorum. Quo explicabo sit pariatur ducimus voluptatibus quam tenetur mollitia laborum magni consectetur. Aut, consequatur quia. Quae voluptatum omnis eligendi dolorum vitae quia dignissimos doloribus neque ad itaque illo perspiciatis, minima id accusamus nam ea, non vel! Quibusdam officiis ut praesentium eius, magnam omnis, nesciunt neque quasi nisi, nemo adipisci commodi maxime repellat facere impedit alias. Quaerat, animi quos ab consequuntur numquam vel quod quo sit?
        </p>
        </article>
      </div>
    </section>
  ) 
};

export default About;