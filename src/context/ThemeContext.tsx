import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeCtx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'system'
  );

  useEffect(() => {
    const mm = window.matchMedia('(prefers-color-scheme: dark)');

    const apply = () => {
      const useDark = theme === 'dark' || (theme === 'system' && mm.matches);
      document.documentElement.classList.toggle('dark', useDark);
      document.documentElement.setAttribute(
        'data-theme',
        useDark ? 'dark' : 'light'
      );
    };

    apply();

    if (theme === 'system') {
      mm.addEventListener('change', apply);
      return () => mm.removeEventListener('change', apply);
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = useMemo<ThemeCtx>(() => {
    const mm = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = theme === 'dark' || (theme === 'system' && mm.matches);
    return { theme, setTheme, isDark };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
