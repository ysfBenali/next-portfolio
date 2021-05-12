import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  font-weight: 600;
  font-size: 16px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Brand = styled.a`
  font-size: 19px;
  margin-right: 2rem;
  cursor: pointer;
  white-space: nowrap;
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
`;

export const RightIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
