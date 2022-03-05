import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import ThemeProvider from '../providers/ThemeProvider';
import SEO from '@/components/seo/next-seo.config';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
      {/* Google Analytics Script*/}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      ></Script>
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}',{
              page_path: window.location.pathname,
          });
        `,
        }}
      />
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
