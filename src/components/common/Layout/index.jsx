import { useState } from 'react';
import GlobalStyle from '../GlobalStyles';
import Header from '../Header';
import Footer from '../Footer';
import { useTheme } from 'providers/ThemeProvider';
import { Wrapper } from '../Layout/styles';

const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <GlobalStyle theme={theme} open={open} />
      <Header open={open} setOpen={setOpen} />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
