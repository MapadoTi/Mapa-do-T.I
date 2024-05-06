import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function BemVindo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SEJA BEM VIND@ AO MAPA DO T.I!</Text>
      <View>
        <TouchableOpacity style={{
          margin: 10,
          height: 50,
          width: 120,
          borderRadius: 50,
          backgroundColor: '#24c0eb', // Changed from 'background' to 'backgroundColor'
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0, // Changed from 'border' to 'borderWidth'
          fontSize: 16,
        }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: 'white' }}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ola Usuario</Text>
      {/* If you intend to keep this button for navigation, it's fine */}
      <Button
        title="Ola Usuario"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
//parte do estilo do butão
//<TouchableOpacity style={{
          //margin: 12,
          //height: 50,
          //width: 120,
          //borderRadius: 10,
          //backgroundColor: '#333', // Changed from 'background' to 'backgroundColor'
          //justifyContent: 'center',
          //alignItems: 'center',
         //borderWidth: 0, // Changed from 'border' to 'borderWidth'
          //ontSize: 16,
        //}}
          //onPress={() => navigation.navigate('Home')}>
          //<Text style={{ color: 'white' }}>Faça login</Text>
        //</TouchableOpacity>