'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from '../../Container';
import Responsive from '../../Responsive';
import ToggleTheme from '../ToggleTheme';
import {
  Wrapper,
  NavContainer,
  Brand,
  HeaderLeft,
  Menu,
  MenuItem,
  HeaderRight,
  RightIconWrapper,
} from './styles';

const NavBar = () => {
  const [changeDesign, setChangeDesign] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setChangeDesign(true);
    } else {
      setChangeDesign(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeNavbarColor);
    }
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <Wrapper changeDesign={changeDesign}>
      <NavContainer as={Container}>
        <HeaderLeft>
          <Link href="/" scroll={false}>
            <Brand>{changeDesign ? '<ysfBenAli />' : 'Youssef BenAli'}</Brand>
          </Link>
          <Responsive desktopOnly>
            <Menu>
              <Link href="/#about" scroll={false}>
                <MenuItem>About</MenuItem>
              </Link>
              <Link href="/#projects" scroll={false}>
                <MenuItem>Projects </MenuItem>
              </Link>
              <Link href="/#contact" scroll={false}>
                <MenuItem>Contact</MenuItem>
              </Link>
            </Menu>
          </Responsive>
        </HeaderLeft>
        <Responsive desktopOnly>
          <HeaderRight>
            <RightIconWrapper>
              <ToggleTheme />
            </RightIconWrapper>
          </HeaderRight>
        </Responsive>
      </NavContainer>
    </Wrapper>
  );
};

export default NavBar;
