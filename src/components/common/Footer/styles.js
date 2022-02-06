import styled from 'styled-components';
import { BREAKPOINTS, Z_INDICES } from 'constants/';
import Image from 'next/image';

export const Wrapper = styled.div`
  z-index: ${Z_INDICES.footer};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  @media ${BREAKPOINTS.sm} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 2;
  @media ${BREAKPOINTS.sm} {
    align-items: center;
  }
  @media ${BREAKPOINTS.md} {
    flex: 1;
  }
`;

export const ExternalLink = styled.a`
  display: flex;
  cursor: pointer;
  color: var(--color-primary);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export const Thanks = styled.div`
  font-size: 14px;
  margin-top: 2px;
`;
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  @media ${BREAKPOINTS.sm} {
    text-align: center;
  }
`;

export const Copyright = styled.span`
  font-size: 12px;
  color: ${({ theme }) =>
    theme === 'light' ? 'var(--color-gray-700)' : 'var(--color-gray-500)'};
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  vertical-align: baseline;
  text-align: left;
  a {
    cursor: pointer;
    font-size: 15px;
    color: var(--color-text);
    font-weight: 450;
  }
  span {
    padding-top: 5px;
    padding-bottom: 0.3rem;
    font-size: 17px;
    font-weight: 500;
    color: ${({ theme }) =>
      theme === 'light' ? 'var(--color-gray-700)' : 'var(--color-gray-500)'};
  }
  @media ${BREAKPOINTS.sm} {
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
    gap: 15px;
    width: 100%;
    text-align: center;
    span {
      display: none;
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  letter-spacing: 0.6px;
  h5 {
    font-weight: 500;
    text-align: center;
    padding-top: 5px;
    margin-bottom: 1.2rem;
    letter-spacing: 1px;
    font-size: 17px;
  }
  @media ${BREAKPOINTS.sm} {
    flex-direction: column;
    justify-content: space-around;
    h5 {
      margin-bottom: 0;
    }
  }
`;
export const Links = styled.div`
  text-align: center;
  align-self: flex-end;

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: inline;
  }
  a {
    cursor: pointer;
  }

  @media ${BREAKPOINTS.sm} {
    text-align: center;
  }
`;

export const SocialImage = styled(Image)`
  padding: 5px !important;
  filter: var(--social-svg-fill-color);
`;
