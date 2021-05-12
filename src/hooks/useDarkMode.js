import { useEffect, useState } from 'react';
import useMedia from './useMedia';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const prefersDarkMode = useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    false,
  );

  const ToggleTheme = () => {
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
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else if (prefersDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [prefersDarkMode]);

  return {
    theme,
    ToggleTheme,
  };
};

export default useDarkMode;
