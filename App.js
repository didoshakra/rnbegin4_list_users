// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigators/RootNavigator';

function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

export default App;
