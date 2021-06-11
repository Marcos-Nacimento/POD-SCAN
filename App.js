import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

import MainNavigation from './src/route/mainNavigation';
import StatusBar from './src/config/StatusBar';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [isLoaded] = useFonts({
    Roboto_400Regular,
  });

  if(!isLoaded) {
    return <AppLoading />
  };

  return(
    <NavigationContainer>
      <StatusBar />
      <MainNavigation />
    </NavigationContainer>
  );
}