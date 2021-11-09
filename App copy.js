import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigators/RootNavigator';

export default function App() {
    return (
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    );
}


