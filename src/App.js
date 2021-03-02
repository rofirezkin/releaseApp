import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import React from 'react';
import Router from './router';
import {LogBox} from 'react-native';
const App = () => {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']); // Ignore log notification by message
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
