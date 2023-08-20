import styled from 'styled-components';
import { BREAKPOINTS } from '@/constants';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 32px;
  padding-top: 35px;

  @media ${BREAKPOINTS.md} {
    flex-direction: column-reverse;
    padding-top: 0;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 3rem;
  @media ${BREAKPOINTS.md} {
    width: 100%;
    padding: 0;
  }
`;

export const SvgContainer = styled.div`
  flex: 1;
  align-self: center;
  @media ${BREAKPOINTS.md} {
    width: 100%;
    padding: 16px 0 16px 0;
  }
`;
