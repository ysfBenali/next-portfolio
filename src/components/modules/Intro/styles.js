import styled from 'styled-components';
import { BREAKPOINTS } from 'constants/';

export const Wrapper = styled.div`
  /* position:relative; */
  text-align: left;
  min-height: 100px;
  /* padding-top:32px; */
  /* padding-bottom:64px; */
  padding-bottom: 32px;
  padding-top: 32px;
  font-weight: 500;
  p,
  ul,
  li {
    font-size: 17px;
  }
  a,
  span {
    color: var(--color-primary);
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Tech = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 15px;
    /* height: 100px; */
    /* padding: 0;
  margin: 0 auto; */
  }
  ul li {
    padding-bottom: 15px;
    padding-left: 10px;
    width: 50%;
    text-align: left;
    @media ${BREAKPOINTS.sm} {
      width: 100%;
    }
  }
`;
