import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xl: { max: '1440px' },
      lg: { max: '1024px' },
      md: { max: '900px' },
      sm: { max: '540px' },
      xs: { max: '320px' },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-wotfard)'],
      },
      colors: {
        primary: '#464cf6',
        primaryDark: '#859bff',
        error: '#F44336',
        errorDark: '#e22d20',
        blured: '#ffffffd9',
        bluredDark: '#0e141bd9',
        'midnight-blue': '#0e141b',
        'french-pass': '#b3e4ff',
        gray: {
          100: '#f2f2f2',
          200: '#eaeaea',
          300: '#cccccc',
          400: '#aaaaaa',
          500: '#888888',
          600: '#666666',
          700: '#444444',
          800: '#2A2A2A',
          900: '#111111',
        },
        'dodger-blue': {
          50: '#dbe8ff',
          100: '#e0eaff',
          200: '#d1e0ff',
          300: '#adc3ff',
          400: '#859bff',
          500: '#5c6fff',
          600: '#464cf6',
          700: '#393bdb',
          800: '#272cb9',
          900: '#293094',
          950: '#191a5c',
        },
        'blizzard-blue': {
          50: '#f2f8fd',
          100: '#e4f0fa',
          150: '#d3eaf8',
          200: '#bfdef2',
        },
      },
      screens: {
        xsMin: '321px',
        smMin: '541px',
        mdMin: '901px',
        lgMin: '1025px',
        xlMin: '1441px',
      },
    },
  },
  plugins: [],
} satisfies Config;
