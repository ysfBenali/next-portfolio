import '../../globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';

const title = 'Youssef BenAli';
const description =
  "I'm Youssef BenAli. I like writing code. Especially in Javascript and React. Currently working as a Full Stack Web Developer.";
const url =
  process.env.NODE_ENV !== 'development'
    ? (process.env.NEXT_PUBLIC_PORTFOLIO_URL as string)
    : 'http://localhost:3000';

export const viewport: Viewport = {
  themeColor: '#675eff',
};

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title,
    description,
    url,
    images: [
      {
        url: `${url}/assets/thumbnail/thumbnail.png`,
        width: 1200,
        height: 600,
        alt: "I'm Youssef BenAli",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/assets/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/assets/favicon/favicon.ico',
    apple: [
      {
        url: '/assets/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: {
      rel: 'mask-icon',
      url: '/assets/favicon/safari-pinned-tab.svg',
    },
  },
  manifest: '/assets/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    site: url,
    creator: '@ysfBenAli',
    images: {
      url: `${url}/assets/thumbnail/thumbnail.png`,
      alt: "I'm Youssef BenAli",
    },
  },
};

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
