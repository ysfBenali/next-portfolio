import { useEffect, useState } from 'react';
import { DefaultSeo } from 'next-seo';
import ThemeProvider from '../providers/ThemeProvider';
import SEO from '@/components/seo/next-seo.config';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            property: 'og:type',
            content: 'website',
          },
        ]}
      />
    );

  return (
    <>
      <Head>
        <title>Youssef BenAli</title>
      </Head>
      <ThemeProvider>
        <DefaultSeo
          {...SEO}
          additionalMetaTags={[
            {
              property: 'og:type',
              content: 'website',
            },
          ]}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
