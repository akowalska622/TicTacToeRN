export const typography = {
  h1: '40px',
  h2: '24px',
  h3: '20px',
  h4: '16px',
  p: '14px',
  fontRegular: 'Outfit-Regular',
  fontBold: 'Outfit-Bold',
  fontMedium: 'Outfit-Medium',
};

export const globalStyles = {
  primary: '#31C3BD',
  primaryActive: '#65E9E4',
  secondary: '#F2B137',
  secondaryActive: '#DDC860',
};

export const darkTheme = {
  ...typography,
  ...globalStyles,
  background: '#1A2A33',
  text: '#DBE8ED',
  surface: '#1F3641',
  contrastSurface: '#A8BFC9',
};

export const lightTheme = {
  ...typography,
  ...globalStyles,
  background: '#DBE8ED',
  text: '#1A2A33',
  surface: '#A8BFC9',
  contrastSurface: '#1F3641',
};
