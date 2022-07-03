import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {AppRoutes} from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider style={{backgroundColor: 'white'}}>
          <AppRoutes />
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
