import { useTheme } from 'providers/ThemeProvider';
import Link from 'next/link';
import Container from '../Container';
import Responsive from '../Responsive';
import social from './social.json';
import {
  Wrapper,
  Left,
  Right,
  Top,
  ExternalLink,
  Thanks,
  Copyright,
  Links,
  Column,
  SocialImage,
} from './styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer>
      <Wrapper as={Container}>
        <Left>
          <Top>
            <Link href="/" passHref>
              <ExternalLink>Youssef BenAli</ExternalLink>
            </Link>
            <Responsive breakpointOnly="sm">
              <Thanks>Welcome to my personal website !</Thanks>
            </Responsive>
          </Top>
          <Responsive breakpointOnly="sm">
            <Copyright theme={theme}>
              © Copyrights 2021. All Rights Reserved.
            </Copyright>
          </Responsive>
        </Left>
        <Right>
          <Column>
            <span>Links</span>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </Column>
          <Column>
            <Responsive breakpointOnly="sm">
              <h5>STAY CONNECTED</h5>
            </Responsive>
            <Links theme={theme}>
              <ul>
                {social.map(({ id, name, link, icon }) => (
                  <li key={id}>
                    <a
                      href={link}
                      target="_blank"
                      title={name}
                      rel="noopener noreferrer"
                    >
                      <SocialImage
                        src={icon}
                        layout="fixed"
                        width="38"
                        height="38"
                        alt={name}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Links>
          </Column>
        </Right>
        <Responsive breakpointOnly="smMin">
          <Copyright theme={theme}>
            © Copyrights 2021. All Rights Reserved.
          </Copyright>
        </Responsive>
      </Wrapper>
    </footer>
  );
};

export default Footer;
