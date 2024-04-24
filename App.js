import * as React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';
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
        <Button
      title="FAÇA SEU LOGIN"
    onPress={() => navigation.navigate('Login')}
      />
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
        <Button
      title=">"
    onPress={() => navigation.navigate('Home')}
      />
      </View>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'top', justifyContent: 'left' }}>
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