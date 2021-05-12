import { useTheme } from 'providers/ThemeProvider';
import ToggleTheme from '../ToggleTheme';
import MenuItem from './MenuItem';
import { Wrapper, Top, Bottom, Backdrop } from './styles';

const SideBar = ({ open, setOpen }) => {
  const theme = useTheme();

  return (
    <>
      <Backdrop open={open} onClick={() => {setOpen(!open)}}/>
      <Wrapper open={open}>
        <Top theme={theme}>
          <MenuItem text={'About'}/>
          <MenuItem  text={'Projects'} />
          <MenuItem  text={'Contact'}/>
        </Top>
        <Bottom>
          <ToggleTheme />
        </Bottom>
      </Wrapper>
    </>
  );
};

export default SideBar;
