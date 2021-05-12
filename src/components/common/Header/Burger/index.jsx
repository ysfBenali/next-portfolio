import { useTheme } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const Burger = ({ open,setOpen }) => {
  const theme = useTheme();
  return (
    <Wrapper onClick={() => setOpen(!open)} theme={theme} open={open}>
      <div />
      <div />
    </Wrapper>
  );
};

export default Burger;
