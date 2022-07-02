import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {AppRoutes} from './src/navigation';
import {LoginOrRegister} from './src/screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaProvider style={{backgroundColor: 'white'}}>
        {/* <LoginOrRegister></LoginOrRegister> */}
        <AppRoutes />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
