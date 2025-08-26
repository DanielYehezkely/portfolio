import React from 'react';

import LangSwitch from './LangSwitch/LangSwitch';

import { LINKS } from '../../constants/data';
import { useRenderLinks } from './NavBarLib';

import { useTranslation } from 'react-i18next';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';


const NavBar: React.FC = () => {
  
const { t } = useTranslation('common');

const translatedLinks = LINKS.map((link) => ({
  ...link,
  text: link.i18nKey ? t(link.i18nKey) : link.text,
}));

  return (
    <nav className="sticky top-0 z-50 bg-blue-100 dark:bg-slate-900 dark:text-slate-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          My<span className="text-blue-500">Portfolio</span>
        </h2>
        <div className="flex gap-x-3">{useRenderLinks(translatedLinks)}</div>
        <LangSwitch />
        <ThemeSwitch />
      </div>
    </nav>
  );

};

export default NavBar;
