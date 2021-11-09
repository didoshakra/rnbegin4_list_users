//RootNavigator.js
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PersonListScreen} from '../screens/PersonListScreen';
import {PersonInfoScreen} from '../screens/PersonInfoScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();


export const RootNavigator = () => {
  return (
      <Stack.Navigator initialRouteName={'list'}>
        <Stack.Screen name="list" component={PersonListScreen} />
        <Stack.Screen name='info' component={PersonInfoScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

  );
};
