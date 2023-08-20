import { BREAKPOINTS } from '@/constants';
import styled, { css } from 'styled-components';

export interface ResponsiveWrapperProps {
  desktopOnly?: boolean;
  mobileOnly?: boolean;
  breakpointOnly?: keyof typeof BREAKPOINTS;
}
export const Wrapper = styled.div<
  ResponsiveWrapperProps
>`
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
