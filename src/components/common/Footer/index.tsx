'use client ';

import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';
import { cn } from '@/lib/utils';
import social from './social.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightsText = `© Copyrights ${currentYear}. All Rights Reserved.`;

  return (
    <footer>
      <Container className="flex flex-row content-between pt-8 pb-8 z-30 sm:flex-col ">
        <div className="flex flex-[2] flex-col justify-between items-start sm:items-center md:flex-1">
          <div className="flex flex-col items-start text-left sm:text-center">
            <Link href="/#">
              <span className="flex text-primary dark:text-primaryDark text-[21px] font-semibold -tracking-wide">
                Youssef BenAli
              </span>
            </Link>
            <div className="text-sm mt-[2px] sm:hidden">
              Welcome to my personal website !
            </div>
          </div>
          <span className="text-xs text-gray-700 dark:text-gray-500 sm:hidden">
            {copyrightsText}
          </span>
        </div>
        <div className="flex flex-1 flex-row justify-between tracking-[0.6px] text-[15px] sm:flex-col sm:justify-around">
          <div className={cn('column')}>
            <span className="pt-[5px] pb-[0.3rem] text-[17px] font-medium text-gray-600 dark:text-gray-500 sm:hidden">
              Links
            </span>
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className={cn('column', 'sm:pb-4')}>
            <h5 className="font-medium text-center text-[17px] pt-[5px] mb-[1.2rem] tracking-[1px] sm:hidden">
              STAY CONNECTED
            </h5>
            <div className="links">
              <ul>
                {social.map(({ id, name, link, icon }) => (
                  <li key={id}>
                    <a
                      href={link}
                      target="_blank"
                      title={name}
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={icon}
                        width="38"
                        height="38"
                        alt={name}
                        style={{
                          padding: '5px',
                          filter: 'var(--social-svg-fill-color)',
                        }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <span className="flex justify-center text-xs text-gray-700 dark:text-gray-500 smMin:hidden">
          {copyrightsText}
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
