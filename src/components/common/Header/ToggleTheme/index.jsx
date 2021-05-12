import { useTheme, useToggleTheme } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const ToggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <Wrapper onClick={ToggleTheme}>
      {theme === 'light' ? (
        <img src="/assets/icons/moon.svg" />
      ) : (
        <img src="/assets/icons/sun.svg" />
      )}
    </Wrapper>
  );
};

export default ToggleTheme;
