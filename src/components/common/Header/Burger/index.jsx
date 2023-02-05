'use client';

import { useTheme } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const Burger = ({ open, onOpen }) => {
  const theme = useTheme();
  return (
    <Wrapper
      theme={theme}
      open={open}
      aria-label="ToggleModal"
      onClick={() => onOpen(!open)}
    >
      <div />
      <div />
    </Wrapper>
  );
};

export default Burger;
