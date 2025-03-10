import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { AppThemeProvider } from '@/theme/AppThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet } from 'react-native';
import { DrawerButton } from '@/drawer/DrawerButton';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';

function App() {
  const avtiveListItemColor = useThemeColor({}, 'activeListItem');
  const textColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerLabelStyle: styles.drawerLabel,
          drawerActiveBackgroundColor: avtiveListItemColor,
          drawerActiveTintColor: textColor,
          headerLeft: DrawerButton,
          drawerStyle: { width: Dimensions.get("screen").width }
          }}
        >
        <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: () => <Ionicons name="close" color={textColor} size={22} />,
              drawerActiveBackgroundColor: backgroundColor,
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
  );
};

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  );
}

const styles = StyleSheet.create({
    drawerLabel: {
        fontSize: 16
    },
});

