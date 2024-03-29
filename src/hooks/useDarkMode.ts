import { useEffect, useState } from 'react';
import useMedia from './useMedia';
import { Theme } from '@/providers/ThemeProvider';

const useDarkMode = (): {
  theme: Theme;
  ToggleTheme: () => void;
} => {
  const [theme, setTheme] = useState<Theme>('light');

  const prefersDarkMode = useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    false,
  );

  const ToggleTheme = (): void => {
    const root = document.documentElement;
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      root.setAttribute('data-theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      root.setAttribute('data-theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const localTheme = window.localStorage.getItem('theme') as Theme;

    if (localTheme) {
      setTheme(localTheme);
    } else if (prefersDarkMode) {
      root.setAttribute('data-theme', 'dark');
      setTheme('dark');
    } else {
      root.setAttribute('data-theme', 'light');
      setTheme('light');
    }
  }, [prefersDarkMode]);

  return {
    theme,
    ToggleTheme,
  };
};

export default useDarkMode;
