import styled from 'styled-components';
import { BREAKPOINTS, Z_INDICES } from 'constants/';

export const Wrapper = styled.div`
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

export const Brand = styled.a`
  cursor: pointer;
  font-size: 21px;
  margin-right: 2rem;
  white-space: nowrap;
  color: var(----color-text);
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

export const MenuItemWrapper = styled.span`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const MenuItem = styled.a`
  cursor: pointer;
  color: var(----color-text);
  text-decoration: none;
  font-size: 17px;
`;

export const RightIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
