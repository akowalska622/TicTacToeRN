import React from 'react';
import './src/i18n';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import ThemeProvider from 'theme/ThemeProvider';
import { AppNavigator } from 'navigators/app-navigator';
import { AuthStoreProvider } from 'models/Auth.store';
import { AppToast } from 'components/AppToast/AppToast';

const SafeAreaViewStyle = { flex: 1 };

const App = () => {
  return (
    <AuthStoreProvider>
      <I18nextProvider>
        <ThemeProvider>
          <StatusBar />
          <SafeAreaView style={SafeAreaViewStyle}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </SafeAreaView>
          <AppToast />
        </ThemeProvider>
      </I18nextProvider>
    </AuthStoreProvider>
  );
};

export default App;
