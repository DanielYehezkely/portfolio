import React from 'react';
import { useTranslation } from 'react-i18next';

const LangSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const isHebrew = (i18n.resolvedLanguage || i18n.language || 'en').startsWith(
    'he'
  );

  const toggle = () => {
    i18n.changeLanguage(isHebrew ? 'en' : 'he');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      aria-pressed={isHebrew}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50 transition"
      title="Switch language"
    >
      <span
        className={`inline-flex items-center gap-1 ${
          !isHebrew ? 'font-semibold' : ''
        }`}
      >
        <img
          src="/svgs/united-states.png"
          alt="usa-flag"
          className="w-4 h-4 rounded-sm"
        />
        EN
      </span>

      <span className="opacity-40">/</span>

      <span
        className={`inline-flex items-center gap-1 ${
          isHebrew ? 'font-semibold' : ''
        }`}
      >
        <img
          src="/svgs/israel.png"
          alt="israel-flag"
          className="w-4 h-4 rounded-sm"
        />
        עברית
      </span>
    </button>
  );
};

export default LangSwitch;
