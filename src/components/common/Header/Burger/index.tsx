'use client';

import { useTheme } from '@/providers/ThemeProvider';
import { Wrapper } from './styles';

const Burger = ({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: (open: boolean) => void;
}) => {
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
