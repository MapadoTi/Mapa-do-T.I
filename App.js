import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

function BemVindo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SEJA BEM VINDO AO MAPA DO T.I!</Text>
      <TouchableOpacity
        style={{
          margin: 12,
          height: 50,
          width: 120,
          borderRadius: 30,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0,
          fontSize: 16,
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: 'white' }}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Preencha o campo:</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: 200, marginVertical: 5 }}
      />
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
        style={{ width: 200, marginVertical: 5 }}
      />
      <TouchableOpacity
        style={{
          margin: 12,
          height: 50,
          width: 120,
          borderRadius: 30,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0,
          fontSize: 16,
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white' }}>Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Olá Usuário TESTE</Text>
    </View>
  );
}

function Descarte() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>IMAGEM</Text>
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

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BemVindo" component={BemVindo} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        
<Drawer.Screen name="Descarte" component={Descarte}/>
        <Drawer.Screen name="Doação" component={Doação}/>
        <Drawer.Screen name="Logout" component={StackNavigator} options={{ headerShown: false }} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
