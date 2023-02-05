import { BREAKPOINTS } from '../../../constants';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ desktopOnly }) =>
    desktopOnly &&
    css`
      @media ${BREAKPOINTS.md} {
        display: none;
      }
    `}
  ${({ mobileOnly }) =>
    mobileOnly &&
    css`
      @media ${BREAKPOINTS.mdMin} {
        display: none;
      }
    `}
    ${({ breakpointOnly }) =>
    breakpointOnly &&
    css`
      @media ${BREAKPOINTS[breakpointOnly]} {
        display: none;
      }
    `}
`;
