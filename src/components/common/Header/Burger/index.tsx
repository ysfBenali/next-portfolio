'use client';

import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';

const Burger = ({
  className,
  open,
  onOpen,
}: {
  className?: string | undefined;
  open: boolean;
  onOpen: (open: boolean) => void;
}) => {
  const theme = useTheme();
  return (
    <button
      className={cn(
        'hamburger z-50 flex flex-col justify-around fixed top-[1.4em] right-8 w-8 h-8 bg-transparent border-none cursor-pointer p-0 focus:outline-none',
        className,
      )}
      aria-label="ToggleModal"
      onClick={() => onOpen(!open)}
    >
      <div
        className={cn({
          'mb-[0.6rem] rotate-45': open,
          '-mb-[0.3rem] rotate-0': !open,
        })}
      />
      <div
        className={cn({
          '-rotate-45': open,
          'rotate-0': !open,
        })}
      />
    </button>
  );
};

export default Burger;
