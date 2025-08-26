// src/components/NavBar/ThemeSwitch.tsx
import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme, isDark } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50 transition dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        aria-haspopup="menu"
        aria-expanded={open}
        title="Theme"
      >
        {isDark ? <FiMoon /> : <FiSun />}
        <span className="hidden sm:inline">
          {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-36 rounded-md border border-slate-200 bg-white p-1 shadow-lg dark:bg-slate-900 dark:border-slate-700"
        >
          <button
            role="menuitem"
            className={`flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 ${
              theme === 'light' ? 'font-semibold' : ''
            }`}
            onClick={() => {
              setTheme('light');
              setOpen(false);
            }}
          >
            <FiSun /> Light
          </button>
          <button
            role="menuitem"
            className={`mt-1 flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 ${
              theme === 'dark' ? 'font-semibold' : ''
            }`}
            onClick={() => {
              setTheme('dark');
              setOpen(false);
            }}
          >
            <FiMoon /> Dark
          </button>
          <button
            role="menuitem"
            className={`mt-1 flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 ${
              theme === 'system' ? 'font-semibold' : ''
            }`}
            onClick={() => {
              setTheme('system');
              setOpen(false);
            }}
          >
            <FiMonitor /> System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
