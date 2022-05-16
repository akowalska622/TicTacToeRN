import { addDecorator } from '@storybook/react-native';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { darkTheme, lightTheme } from './global-styles';

const themes = [darkTheme, lightTheme];
addDecorator(withThemesProvider(themes));
