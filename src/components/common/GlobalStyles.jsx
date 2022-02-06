import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root   {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    --font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";

    // ## colors variables
    --color-text: #131415;
    --color-background:white;
    /* --color-background:#f3f8ff; */
    --color-homepage-light: linear-gradient( 0deg,#D3EAF8,#BFDEF2);
    --color-homepage-dark: linear-gradient( 0deg,rgb(179 229 255 / 10%),rgb(14 20 27/ 80%));
    --color-homepage-light:#bfdef2;
    --color-homepage-dark:#d3eaf8;
    --color-homepage-bg:#d3eaf8;
    --color-blurred-background:#ffffffd9;
    --color-text-dark: #131415;
    --color-text-light: white;

    --font-weight-bold: 500;
    --font-weight-medium: 400;
    --font-weight-light: 300;

    --color-gray-100: #f2f2f2;
    --color-gray-200: #eaeaea;
    --color-gray-300: #cccccc;
    --color-gray-400: #aaaaaa;
    --color-gray-500: #888888;
    --color-gray-600: #666666;
    --color-gray-700: #444444;
    --color-gray-800: #2A2A2A;
    --color-gray-900: #111111;

    --scrollbarBG: white;
    --thumbBG: var(--color-gray-400);

    --color-subtle-background: #F5F9FF;
    --color-primary:#4D61FF;
    
    --color-secondary: #ff0a78;
    --color-error: #fa3879;
    
    --social-svg-fill-color : invert(1%) sepia(0%) saturate(6038%) hue-rotate(336deg) brightness(99%) contrast(86%); // equal to white
    // ## colors variables

  }
  [data-theme="dark"] {
        // ## colors variables
    --color-text: white;
    --color-background: #0e141b;
    --color-homepage-light:#b3e5ff00;
    --color-homepage-dark: #b3e5ff1a;
    --color-homepage-bg:#0e141b;
    --color-blurred-background:#0e141bd9;
    --scrollbarBG: var(--color-gray-700);
    --color-primary:#5773FF;//new 
    --social-svg-fill-color : invert(100%) sepia(0%) saturate(7426%) hue-rotate(117deg) brightness(119%) contrast(119%); // equal to #131415
        // ## colors variables
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
    line-height: 1.6;
  }
  body::-webkit-scrollbar {
    width: 14px;
  }
  body{
    height: 100%;
    min-width: 100%;
    font-family: var(--font-family);
    overflow : ${({ open }) => (open ? 'hidden' : 'auto')};
    background: linear-gradient(0deg, var(--color-homepage-light), var(--color-homepage-dark));    
    background-color: var(--color-homepage-bg);
    color: var(--color-text);
    text-rendering: optimizeLegibility;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  body::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
    :hover{
      background-color: var(--color-gray-300) ;
    }
}
  body, input, button, select, option {
    font-weight: var(--font-weight-medium);
  }
  h1, h2, h3, h4, h5, h6, strong {
    margin:0;
    font-weight: var(--font-weight-bold);
  }
  h1 {
    font-size: 37px;
  }
  h2 {
    font-size: 29px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 20px;
  } 
  h5 {
    font-size: 17px;
  } 
  h6 {
    font-size: 10px;
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding:0;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
 
  p {
    margin-bottom:0;
    font-size: 16px;
  }
  footer{
    background: linear-gradient(0deg, var(--color-homepage-light), var(--color-homepage-dark));    
  }

`;

export default GlobalStyle;
