import * as React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const [text, setText] = React.useState("");

function BemVindo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SEJA BEM VINDO AO MAPA DO T.I!</Text>
      <View>
      <TouchableOpacity style={{
          margin: 12,
          height: 50,
          width: 120,
          borderRadius: 30,
          backgroundColor: 'blue', // Changed from 'background' to 'backgroundColor'
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0, // Changed from 'border' to 'borderWidth'
          fontSize: 16,
        }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'white' }}>Proximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Login({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> Preencha o campo:</Text>
      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      /><TextInput
        label="Senha"
        value={text}
        onChangeText={text => setText(text)}
      />
      <View>
      <TouchableOpacity style={{
          margin: 12,
          height: 50,
          width: 120,
          borderRadius: 30,
          backgroundColor: 'blue', // Changed from 'background' to 'backgroundColor'
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
    </View>
  );
}

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Olá Usuário" component={BemVindo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;