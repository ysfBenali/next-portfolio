import styled from 'styled-components';
import { BREAKPOINTS, Z_INDICES } from 'constants/';

export const HeroWrapper = styled.div`
  position: relative;
  z-index: ${Z_INDICES.hero};
  height: 400px;
`;

export const SvgWrapper = styled.div`
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 90px;
  width: 100%;

  & svg {
    fill: var(--color-background);
  }
`;

export const DesktopSpacer = styled.div`
  min-width: 48px;
  min-height: 48px;
  @media ${BREAKPOINTS.md} {
   display:none;
  }
`;
