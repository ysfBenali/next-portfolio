import React, { createContext, useContext } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const ThemeContext = createContext('light');
const ThemeDispatchContext = createContext(undefined);

const ThemeProvider = ({ children }) => {
  const { theme, ToggleTheme } = useDarkMode();
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={ToggleTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export const useToggleTheme = () => useContext(ThemeDispatchContext);

export default ThemeProvider;
