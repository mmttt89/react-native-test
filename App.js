import React, { useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView, View, Dimensions } from 'react-native';
import Root from "./src";
import SplashScreen from 'react-native-splash-screen';
import { Root as NativebaseRoot } from "native-base";

const { height, width } = Dimensions.get("window");
const RATIO = (height / width);
const IS_SMART_PHONE = () => (RATIO > 1.7777) ? true : false

EStyleSheet.build({
  $rem: IS_SMART_PHONE() ? width / 280 : width / 380,
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NativebaseRoot>
      <Root />
    </NativebaseRoot>
  )
}

export default App;