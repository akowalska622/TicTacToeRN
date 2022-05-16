import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './global-styles';

const CustomThemeProvider = ({ children }) => {
  const theme = 'dark';

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
