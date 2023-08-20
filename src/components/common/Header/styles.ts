import styled from 'styled-components';
import { BREAKPOINTS, Z_INDICES } from '@/constants';

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  padding-bottom: 100px;
`;

export const SvgWrapper = styled.div`
  display: block;
  z-index: ${Z_INDICES.mainContent};
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 90px;
  width: 100%;
  z-index: 2;
  & svg {
    fill: var(--color-background);
  }
`;

export const DesktopSpacer = styled.div`
  min-width: 48px;
  min-height: 48px;
  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

export const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media ${BREAKPOINTS.md} {
    flex-direction: column-reverse;
    padding-bottom: 1.2rem;
  }
`;

export const Avatar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media ${BREAKPOINTS.md} {
    padding-bottom: 0.8rem;
  }
  background-color: 'red';
`;

export const Details = styled.div`
  flex: 2;
  text-align: left;
  h1 {
    font-size: 23pt;
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 14pt;
    padding-bottom: 1rem;
  }

  button {
    cursor: pointer;
  }
  @media ${BREAKPOINTS.md} {
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    button {
      margin: 0 auto;
    }
  }
`;
