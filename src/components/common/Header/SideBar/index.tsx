'use client';

import { useTheme } from '@/providers/ThemeProvider';
import ToggleTheme from '../ToggleTheme';
import MenuItem from './MenuItem';
import { Wrapper, Top, Bottom, Backdrop } from './styles';

const SideBar = ({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: (open: boolean) => void;
}) => {
  const theme = useTheme();

  return (
    <>
      <Backdrop
        open={open}
        onClick={() => {
          onOpen(!open);
        }}
      />
      <Wrapper open={open}>
        <Top theme={theme}>
          <MenuItem text="About" target="/#about" onOpen={onOpen} open={open} />
          <MenuItem
            text="Projects"
            target="/#projects"
            onOpen={onOpen}
            open={open}
          />
          <MenuItem
            text="Contact"
            target="/#contact"
            onOpen={onOpen}
            open={open}
          />
        </Top>
        <Bottom>
          <ToggleTheme />
        </Bottom>
      </Wrapper>
    </>
  );
};

export default SideBar;
