'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';
import Burger from './Burger';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Button from '../Button';
import avatar from '/public/avatar.jpg';

const Header = ({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: (open: boolean) => void;
}) => {
  const yearsOfExperience = new Date().getFullYear() - 2019;

  return (
    <>
      <div className="relative min-w-[48px] min-h-[48px] md:hidden" />
      <NavBar />
      <div className="relative flex flex-col items-center justify-center min-h-[450px] pb-[100px]">
        <Container className="relative flex items-center md:flex-col-reverse md:pb-5">
          <div className="flex-[2] text-left md:flex-1 md:items-center md:justify-center md:text-center">
            <h1 className="text-[23pt] pb-4">👋 Hello, I'm Youssef !</h1>
            <h2 className="text-[14pt] pb-4">
              A Full Stack Developer from Morocco 🇲🇦. I've been creating on the
              web for around {yearsOfExperience} years, mainly React and Node.
              I’m passionate about turning bright, creative ideas into high
              quality software.
            </h2>
            <Link href="/#contact">
              <Button>Hire Me</Button>
            </Link>
          </div>
          <div className="flex flex-1 justify-center overflow-hidden md:pb-3">
            <Image
              className="border-[3.5px] border-solid rounded-full border-black dark:border-white"
              alt="My Picture"
              src={avatar}
              width={150}
              height={150}
              priority={true}
              placeholder="blur"
              quality={90}
            />
          </div>
        </Container>
        <div className="absolute block left-0 bottom-0 h-[90px] w-full z-20">
          <svg
            className="dark:fill-midnight-blue fill-white"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 1440 74"
          >
            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
          </svg>
        </div>
      </div>
      <Burger className="mdMin:hidden" open={open} onOpen={onOpen} />
      <SideBar open={open} onOpen={onOpen} />
    </>
  );
};

export default Header;
