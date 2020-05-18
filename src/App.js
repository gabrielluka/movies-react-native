import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
