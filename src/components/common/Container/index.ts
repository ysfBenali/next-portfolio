import styled from 'styled-components';
import { BREAKPOINTS } from '@/constants';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 90%;
  padding-left: 1rem;
  padding-right: 1rem;

  @media ${BREAKPOINTS.md} {
    width: 100%;
  }
`;

export default Container;
