import Container from '../../Container';
import Responsive from '../../Responsive';
import ToggleTheme from '../ToggleTheme';
import {
  Wrapper,
  Brand,
  HeaderLeft,
  Menu,
  MenuItem,
  HeaderRight,
  MenuItemWrapper,
  RightIconWrapper,
} from './styles';

const NavBar = () => {

  return (
    <Wrapper as={Container}>
      <HeaderLeft>
        <Brand>Youssef BenAli</Brand>
        <Responsive desktopOnly>
          <Menu>
            <MenuItemWrapper>
              <MenuItem>About</MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
              <MenuItem>Projects</MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
              <MenuItem>Contact</MenuItem>
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
    </Wrapper>
  );
};

export default NavBar;
