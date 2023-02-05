import styled from 'styled-components';
import { Z_INDICES } from '../../../../constants';

export const Wrapper = styled.button`
  z-index: ${Z_INDICES.burger};
  display: flex;
  position: fixed;
  top: 1.4rem;
  right: 2rem;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    background: var(--color-text);
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      margin-bottom: ${({ open }) => (open ? '.6rem' : '-0.3rem')};
    }

    :nth-child(2) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
