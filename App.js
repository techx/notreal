import { useCallback } from 'react';
import { View, Text } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Manrope_800ExtraBold, Manrope_700Bold, Manrope_500Medium } from '@expo-google-fonts/manrope'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_500Medium,
    Manrope_700Bold,
    Manrope_800ExtraBold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} onLayout={onLayoutRootView}>
      <Text style={{ fontSize: 14, fontFamily: "Manrope_500Medium" }}>
        Open up App.js to start the workshop!
      </Text>
    </View>
  );
}