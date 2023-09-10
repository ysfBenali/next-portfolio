'use client';

import Link from 'next/link';
import ToggleThemeButton from '../ToggleThemeButton';
import { cn } from '@/lib/utils';

const SideBar = ({
  className,
  open,
  onOpen,
}: {
  className?: string | undefined;
  open: boolean;
  onOpen: (open: boolean) => void;
}) => {
  const navigation = [
    {
      text: 'About',
      target: '/#about',
    },
    {
      text: 'Projects',
      target: '/#projects',
    },
    {
      text: 'Contact',
      target: '/#contact',
    },
  ];
  return (
    <>
      <button
        onClick={() => {
          onOpen(!open);
        }}
        className={cn(
          'z-40 fixed top-0 left-0 w-full h-screen bg-blured dark:bg-bluredDark',
          {
            'block backdrop-blur': open,
            'hidden backdrop-blur-0': !open,
          },
        )}
      />
      <nav
        className={cn(
          'fixed z-50 flex flex-col justify-between items-center bottom-[100px] h-3/4 py-0 px-8 transform ease-in-out duration-[0.3s] md:w-3/4 ',
          {
            'translate-x-0': open,
            '-translate-x-full': !open,
          },
          className,
        )}
      >
        <div className="w-full">
          {navigation.map((item) => (
            <div
              key={item.text}
              className="text-left text-2xl tracking-[0.0125rem] leading-relaxed font-medium py-6 px-0"
            >
              <Link
                href={item.target}
                onClick={() => {
                  onOpen(!open);
                }}
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex w-full text-left">
          <ToggleThemeButton />
        </div>
      </nav>
    </>
  );
};

export default SideBar;
