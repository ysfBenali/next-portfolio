'use client ';

import Image from 'next/image';
import { useTheme } from 'providers/ThemeProvider';
import Link from '../Link';
import Container from '../Container';
import Responsive from '../Responsive';
import {
  Wrapper,
  Left,
  Right,
  Top,
  Home,
  Thanks,
  Copyright,
  Links,
  Column,
} from './styles';
import social from './social.json';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer>
      <Wrapper as={Container}>
        <Left>
          <Top>
            <Link href="/#" scroll={false}>
              <Home>Youssef BenAli</Home>
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
            <Link href="/#about" scroll={false}>
              About
            </Link>
            <Link href="/#projects" scroll={false}>
              Projects
            </Link>
            <Link href="/#contact" scroll={false}>
              Contact
            </Link>
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
