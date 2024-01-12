'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ToggleThemeButton from '../ToggleThemeButton';
import Container from '../../Container';
import { cn } from '@/lib/utils';

const navigation = [
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Projects',
    href: '/#projects',
  },
  {
    name: 'Contact',
    href: '/#contact',
  },
];

const NavBar = () => {
  const [isShortenBrandShown, setIsShortenBrandShown] =
    useState<boolean>(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setIsShortenBrandShown(true);
    } else {
      setIsShortenBrandShown(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeNavbarColor);
    }
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <div
      className={cn(
        'z-20 sticky top-0 mb-8 w-full md:mb-0 transition-all duration-100 ease-linear ',
        {
          'bg-blured dark:bg-bluredDark backdrop-blur': isShortenBrandShown,
        },
      )}
    >
      <Container className="flex items-center justify-between pt-[1.4rem] pb-[0.8rem] font-semibold text-base">
        <div className="flex items-center">
          <Link href="/">
            <div className="brand">
              {isShortenBrandShown ? '<ysfBenAli />' : 'Youssef BenAli'}
            </div>
          </Link>
          <div className="flex items-center justify-between md:hidden">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <span className="text-[17px] mx-2 p-2">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-baseline md:hidden">
          <ToggleThemeButton />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
