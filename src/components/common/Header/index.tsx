'use client';

import Image from 'next/image';
import { useTheme } from '@/providers/ThemeProvider';
import avatar from '/public/avatar.jpg';
import Burger from './Burger';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Responsive from '../Responsive';
import Container from '../Container';
import Button from '../Button';
import Link from 'next/link';
import {
  Avatar,
  DesktopSpacer,
  Details,
  HeroWrapper,
  IntroWrapper,
  SvgWrapper,
} from './styles';

const Header = ({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: (open: boolean) => void;
}) => {
  const theme = useTheme();

  return (
    <>
      <DesktopSpacer />
      <NavBar />
      <HeroWrapper>
        <IntroWrapper as={Container}>
          <Details>
            <h1>👋 Hello, I'm Youssef !</h1>
            <h2>
              A Full Stack Developer from Morocco 🇲🇦. I've been creating on the
              web for around 2 years, mainly React and Node. I’m passionate
              about turning bright, creative ideas into high quality software.
            </h2>
            <Link href="/#contact">
              <Button>Hire Me</Button>
            </Link>
          </Details>
          <Avatar>
            <Image
              alt="My Picture"
              src={avatar}
              width={150}
              height={150}
              priority={true}
              placeholder="blur"
              quality={90}
              style={{
                borderRadius: '90px',
                border: '4px solid var(--color-text)',
              }}
            />
          </Avatar>
        </IntroWrapper>
        <SvgWrapper theme={theme}>
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 1440 74"
          >
            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
          </svg>
        </SvgWrapper>
      </HeroWrapper>
      <Responsive mobileOnly>
        <Burger open={open} onOpen={onOpen} />
      </Responsive>
      <SideBar open={open} onOpen={onOpen} />
    </>
  );
};

export default Header;
