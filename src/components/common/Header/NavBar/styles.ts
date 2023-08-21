import styled from 'styled-components';
import { BREAKPOINTS, Z_INDICES } from '@/constants';

export const Wrapper = styled.div<
  {
    changeDesign: boolean;
  }
>`
  z-index: ${Z_INDICES.navBar};
  position: sticky;
  transform: translateZ(0);
  top: 0px;
  margin-bottom: 2rem;
  width: 100%;
  background-color: ${({ changeDesign }) =>
    changeDesign ? 'var(--color-blurred-background)' : ''};
  -webkit-backdrop-filter: ${({ changeDesign }) =>
    changeDesign ? 'blur(9px)' : ''};
  backdrop-filter: ${({ changeDesign }) => (changeDesign ? 'blur(9px)' : '')};
  transition: 0.0125s all ease;

  @media ${BREAKPOINTS.md} {
    margin-bottom: 0;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.4rem;
  padding-bottom: 0.8rem;
  font-weight: 600;
  font-size: 16px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Brand = styled.div`
  cursor: pointer;
  font-size: 21px;
  margin-right: 2rem;
  white-space: nowrap;
  text-decoration: none;
  color: var(--color-primary);
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItem = styled.span`
  color: var(--color-text);
  font-size: 17px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const RightIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;