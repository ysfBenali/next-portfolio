import Burger from './Burger';
import NavBar from './NavBar';
import SideBar from './SideBar';
import {
  Avatar,
  DesktopSpacer,
  Details,
  HeroWrapper,
  IntroWrapper,
  SvgWrapper,
  Hero,
  StyledImage,
} from './styles';
import Responsive from '../Responsive';
import { useTheme } from 'providers/ThemeProvider';
import Container from '../Container';
import Button from '../Button';

const Header = ({ open, setOpen }) => {
  const theme = useTheme();

  return (
    <>
      <DesktopSpacer />
      <NavBar />
      <HeroWrapper open={open}>
        <IntroWrapper as={Container}>
          <Details>
            <h1>👋 Hello, I'm Youssef !</h1>
          
            <h2>
              A Full Stack Developer from Morocco, i've been creating on the web
              for around 2 years. I'm in love with React and Node, and super
              passionate about turning new ideas to real products.
            </h2>
            <a href="#contact">
              <Button>Hire Me</Button>
            </a>
          </Details>
          <Avatar>
            <StyledImage
              src="/avatar.jpg"
              width={180}
              height={180}
              alt="My Picture"
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
        <Burger open={open} setOpen={setOpen} />
      </Responsive>
      <SideBar open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
