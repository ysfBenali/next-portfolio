import { useState } from 'react';
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
  MenuItemWrapper,
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
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Wrapper changeDesign={changeDesign}>
      <NavContainer as={Container}>
        <HeaderLeft>
          <Link href="/" passHref>
            <Brand>{changeDesign ? '<ysfBenAli />' : 'Youssef BenAli'}</Brand>
          </Link>
          <Responsive desktopOnly>
            <Menu>
              <MenuItemWrapper>
                <MenuItem href="#about">About</MenuItem>
              </MenuItemWrapper>
              <MenuItemWrapper>
                <MenuItem href="#projects">Projects</MenuItem>
              </MenuItemWrapper>
              <MenuItemWrapper>
                <MenuItem href="#contact">Contact</MenuItem>
              </MenuItemWrapper>
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
