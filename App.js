import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {BemVindo} from './BemVindo';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BemVindo">
        <Stack.Screen name="BemVindo" component={BemVindo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}