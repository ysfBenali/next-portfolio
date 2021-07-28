import styled from 'styled-components';
import { BREAKPOINTS } from 'constants/';

export const Wrapper = styled.div`
  /* position:relative; */
  text-align: left;
  min-height: 100px;
  padding-bottom: 32px;
  padding-top: 32px;
  @media ${BREAKPOINTS.mdMin} {
    /* min-height: 85vh; */
  }
`;

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80fr;
  gap: 1.2rem 1.2rem;
  margin-top: 2em;
  @media ${BREAKPOINTS.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${BREAKPOINTS.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.32);
  cursor: pointer;
  transition: transform 0.4s ease-in-out;

  color: var(----color-text);
  text-decoration: none;
  &:hover {
    transform: scale(1.025);
  }
`;

export const Card = styled.div`
  padding: 1rem;
  height: 100%;
  /* background-color: var(--color-homepage-dark); */
  background-color: ${({ theme }) =>
    theme === 'light'
      ? 'var(--color-subtle-background)'
      : 'var(--color-homepage-dark)'};
`;

export const Description = styled.div`
  padding: 0.2rem 0;
  text-align: left;
  min-height: 140px;

  h4 {
    color: var(--color-primary);
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 0.3rem;
    margin-right: 1rem;
  }
`;
