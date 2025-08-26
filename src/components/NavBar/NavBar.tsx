import React from 'react';

import LangSwitch from './LangSwitch/LangSwitch';

import { LINKS } from '../../constants/data';
import { useRenderLinks } from './NavBarLib';

const NavBar: React.FC = () => {
  
  return (
    <nav className="bg-blue-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          My<span className="text-blue-500">Portfolio</span>
        </h2>
        <div className="flex gap-x-3">
        {useRenderLinks(LINKS)}
        </div>
        <LangSwitch/>
      </div>
    </nav>
  );

};

export default NavBar;
