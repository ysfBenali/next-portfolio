import Intro from '@/components/modules/Intro';
import Projects from '@/components/modules/Projects';
import Contact from '@/components/modules/Contact';
import { useTheme } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const Main = () => {
  const theme = useTheme();
  return (
    <Wrapper theme={theme}>
      <Intro/>
      <Projects/>
      <Contact/>
    </Wrapper>
  )
}

export default Main;
