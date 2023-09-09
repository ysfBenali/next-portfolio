'use client';

import { useTheme, useToggleTheme } from '@/providers/ThemeProvider';
import Image from 'next/image';

const ToggleThemeButton = () => {
  const ToggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <button className="cursor-pointer" onClick={ToggleTheme}>
      {theme === 'light' ? (
        <Image src="/assets/icons/moon.svg" width="24" height="24" alt="moon" />
      ) : (
        <Image src="/assets/icons/sun.svg" width="24" height="24" alt="sun" />
      )}
    </button>
  );
};

export default ToggleThemeButton;
