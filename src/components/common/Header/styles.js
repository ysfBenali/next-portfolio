import styled from 'styled-components';
import { BREAKPOINTS, Z_INDICES } from 'constants/';
import Image from 'next/image';

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-around; */

  /* background-color:red; */
  /* z-index: ${Z_INDICES.hero}; */
  min-height: 450px;
  //new
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
  /* left: 50%; */
  /* padding-top: 4rem;
  padding-bottom: 4rem; */
  /* width: 100%; */
  /* margin: 0 auto; */

  /* max-height: 130px; */
  @media ${BREAKPOINTS.md} {
    flex-direction: column-reverse;
    padding-bottom: 1.2rem;
  }
  /* flex-direction: column; */
  /* position: relative;
display: block;
align-items: center;
  justify-content: center; */
  /* flex-flow: row wrap-reverse; */
  /* position: fixed;
align-self: center; */

  /* position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  text-align: left;
  width:100%;
  align-items: center;
  justify-content: center; */
`;

export const Avatar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media ${BREAKPOINTS.md} {
    padding-bottom: 0.8rem;
  }
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
`;

export const StyledImage = styled(Image)`
  border-radius: 90px;
  border: 4px solid var(--color-text) !important;
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
