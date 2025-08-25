import React from "react";

import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const SelfIntro:React.FC = () => {
  return (
    <article>
      <h1 className="text-7xl font-bold tracking-wider">I'm Daniel</h1>
      <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
        Frontend Developer
      </p>
      <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
        A pationate developer trying to make a portfolio ...
      </p>
      <div className="flex gap-x-4 mt-4">
        <a
          href="https://github.com/DanielYehezkely"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-yehezkely/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </a>
        <a
          href="https://www.facebook.com/daniel.yehezkali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </a>
      </div>
    </article>
  );
};

export default SelfIntro;
