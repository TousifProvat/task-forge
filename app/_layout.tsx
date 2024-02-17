import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { TamaguiProvider } from 'tamagui';
import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { useFonts } from 'expo-font';

import { tamaguiConfig } from '@/tamagui.config';
import { useColorScheme } from '@/components/useColorScheme';
import Toast from '@/components/Toast';
import SafeToastViewport from '@/components/SafeToastViewPort';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'signin',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    lato: require('../assets/fonts/Lato-Light.ttf'),
    'lato-sb': require('../assets/fonts/Lato-Regular.ttf'),
    'lato-b': require('../assets/fonts/Lato-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ToastProvider>
        <Toast />
        <SafeToastViewport />
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
      </ToastProvider>
    </TamaguiProvider>
  );
}
