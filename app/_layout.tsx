import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import { AppThemeContext, ThemeOptions } from '@/theme/AppThemeContext';
import { AppThemeProvider } from '@/theme/AppThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const { theme } = React.useContext(AppThemeContext);

  return (
    <ThemeProvider value={theme.mode === ThemeOptions.Dark ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: 'Home', // TODO: how to hide this from the drawer?
              title: '',
            }}
        />
        <Drawer.Screen
            name="theme"
            options={{
              drawerLabel: 'Theme',
              title: 'Theme',
            }}
        />
      </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  );
}

