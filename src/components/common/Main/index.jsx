import Intro from '@/components/modules/Intro';
import { useTheme } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const Main = () => {
  const theme = useTheme();
  return (
    <Wrapper theme={theme}>
      <Intro />
    </Wrapper>
  );
};

export default Main;
