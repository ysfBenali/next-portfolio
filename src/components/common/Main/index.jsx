import Intro from '@/components/modules/Intro';
import Projects from '@/components/modules/Projects';
import { useTheme } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const Main = ({ data }) => {
  const theme = useTheme();
  return (
    <Wrapper theme={theme}>
      <Intro />
      <Projects repos={data}/>
    </Wrapper>
  );
};

export default Main;
