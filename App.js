import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import Root from "./src";
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <Root />
  )
}

export default App;
