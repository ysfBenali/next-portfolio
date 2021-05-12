import { useEffect, useState } from 'react';
import ThemeProvider from '../providers/ThemeProvider';

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ThemeProvider><Component {...pageProps} /></ThemeProvider>
  );
}

export default MyApp;
