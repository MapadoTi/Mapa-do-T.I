import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from './BemVindo';

function BemVindo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>SEJA BEM VIND@ AO MAPA DO T.I!</Text>
      <Button
        title="LOGIN"
        onPress={() => navigation.navigate('login')}
      />
    </View>
  );
}

function Doação() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>iMAGEM</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BemVindo" component={BemVindo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
