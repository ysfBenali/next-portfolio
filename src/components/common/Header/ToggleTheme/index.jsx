import { useTheme, useToggleTheme } from 'providers/ThemeProvider';
import Image from 'next/image';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const ToggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <Wrapper onClick={ToggleTheme}>
      {theme === 'light' ? (
        <Image
          src="/assets/icons/moon.svg"
          width="24"
          height="24"
          layout="fixed"
          alt="moon"
        />
      ) : (
        <Image
          src="/assets/icons/sun.svg"
          width="24"
          height="24"
          layout="fixed"
          alt="sun"
        />
      )}
    </Wrapper>
  );
};

export default ToggleTheme;
