import { useCallback } from 'react';
import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Manrope_800ExtraBold, Manrope_700Bold, Manrope_500Medium } from '@expo-google-fonts/manrope'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import PostsProvider from './contexts/posts'
import ProfileProvider from './contexts/profile'

import Header from './components/Header';
import MainScreen from './navigation/MainScreen';
import CameraScreen from './navigation/CameraScreen'

const Stack = createNativeStackNavigator();

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
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ProfileProvider>
        <PostsProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen options={{ header: () => <Header /> }} name="Main" component={MainScreen} />
              <Stack.Screen options={{ header: () => <Header darkMode partial /> }} name="Camera" component={CameraScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PostsProvider>
      </ProfileProvider>
    </View >
  );
}