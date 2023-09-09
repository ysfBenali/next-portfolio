import '../../globals.css';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import localFont from '@next/font/local';

const wotfard = localFont({
  src: [
    {
      path: '../../public/fonts/wotfard-regular-webfont.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/wotfard-semibold-webfont.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/fonts/wotfard-bold-webfont.ttf',
      weight: '700',
      style: 'bold',
    },
  ],

  variable: '--font-wotfard',
  display: 'swap',
});

const url =
  process.env.NODE_ENV !== 'development'
    ? (process.env.NEXT_PUBLIC_PORTFOLIO_URL as string)
    : 'http://localhost:3000';

const title = 'Youssef BenAli | Hello world !';
const description =
  "I'm Youssef BenAli. I like writing code. Especially in Javascript and React. Currently working as a Full Stack Web Developer.";

const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light'
  }
  document.documentElement.dataset.theme = getUserPreference();
`;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${wotfard.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/assets/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#675eff" />
        <NextSeo
          useAppDir={true}
          title={title}
          description={description}
          additionalMetaTags={[
            {
              name: 'image',
              content: `${url}/assets/thumbnail/thumbnail.png`,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: description,
            },
            {
              property: 'og:url',
              content: url,
            },
            {
              property: 'og:image',
              content: `${url}/assets/thumbnail/thumbnail.png`,
            },
            {
              name: 'twitter:url',
              content: url,
            },
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'twitter:description',
              content: description,
            },
            {
              name: 'twitter:image:src',
              content: `${url}/assets/thumbnail/thumbnail.png`,
            },
            {
              name: 'twitter:image',
              content: `${url}/assets/thumbnail/thumbnail.png`,
            },
          ]}
        />
        <Script
          id="dark-mode-prevent-flash"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: setInitialTheme,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
