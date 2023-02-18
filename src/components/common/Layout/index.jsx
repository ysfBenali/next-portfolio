'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'providers/ThemeProvider';
import GlobalStyle from '../GlobalStyles';
import Header from '../Header';
import Footer from '../Footer';
import { Wrapper } from './styles';

const Layout = ({ children }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Wrapper>
        <GlobalStyle theme={theme} open={open} />
        <Header open={open} onOpen={setOpen} />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
