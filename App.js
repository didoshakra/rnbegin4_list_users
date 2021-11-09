// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PersonListScreen from './src/screens/PersonListScreen';
import PersonInfoScreen from './src/screens/PersonInfoScreen';
// import {RootNavigator} from './src/navigators/RootNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View>
    //   {/* <HomeScreen /> */}
    //   <PersonListScreen />
    // </View>
    <NavigationContainer>
      {/* <RootNavigator/> */}
      <Stack.Navigator initialRouteName={'list'}>
        <Stack.Screen name="list" component={PersonListScreen} />
        <Stack.Screen name='info' component={PersonInfoScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
