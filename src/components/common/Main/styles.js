import styled from 'styled-components';
import { Z_INDICES } from 'constants/';

export const Wrapper = styled.main`
  z-index: ${Z_INDICES.mainContent};
  flex: 1;
  margin-top: -1px;
  padding-top: 64px;
  padding-bottom: 32px;
  background-color: var(--color-background);
`;
