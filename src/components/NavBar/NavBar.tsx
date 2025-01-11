import React from 'react';
import { LINKS } from '../../constants/navLinks';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web <span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x3">
          {LINKS.map((link) => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href}>
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
