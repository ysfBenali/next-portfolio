import styled from 'styled-components';
import { BREAKPOINTS, Z_INDICES } from 'constants/';

export const Wrapper = styled.nav`
  z-index: ${Z_INDICES.sideBar};
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  bottom: 100px;
  height: 75%;
  width: 100%;
  padding: 0 2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media ${BREAKPOINTS.md} {
    width: 75%;
  }
`;

export const Top = styled.div`
  width: 100%;
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  * {
    padding: 0.8rem 0;
  }
`;

export const Backdrop = styled.button`
  z-index: ${Z_INDICES.sideBar - 1};
  position: fixed;
  display: ${({ open }) => (open ? 'block' : 'none')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  border: none;
  background: var(--color-blurred-background);
  backdrop-filter: ${({ open }) => (open ? 'blur(8px)' : 'blur(0)')};
  filter: ${({ open }) => (open ? 'blur(8px)' : 'blur(0)')};
`;
