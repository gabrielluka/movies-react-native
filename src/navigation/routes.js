import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import WatchTrailer from '../pages/WatchTrailer';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WatchTrailer"
        component={WatchTrailer}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: '#FFF',
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
