import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground,StyleSheet,Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, DefaultTheme, Provider as PaperProvider,TargetComponent, List   } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imgbkg1='./assets/welcome.png'
///1080 por 1920
function BemVindo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ImageBackground source={require('./assets/welcome.png')} style={styles.image}>
    <View>
    <TouchableOpacity
        style={{
          margin: 12,
          height: 50,
          width: 120,
          borderRadius: 30,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          top: 100,
          borderWidth: 0,
          fontSize: 16,
        }}
        onPress={() => navigation.navigate('Login')}
      >
      <Text style={{ color: 'white' }}>Próximo</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
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
        style={styles.input}
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: '#00508F', // Define a cor do texto do rótulo e da linha de sublinhado
            
          },
        }}
      />
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
        style={styles.input}
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: '#00508F', // Define a cor do texto do rótulo e da linha de sublinhado
          },
        }}
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
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 700}} />

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
      <Stack.Screen name="BemVindo" component={BemVindo} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue', // Define a cor primária como azul
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth, // Define a largura da imagem como a largura da tela
    height: windowHeight, // Define a altura da imagem como a altura da tela
    resizeMode: 'contain', // Redimensiona a imagem para caber completamente
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  input: {
    width: 300,
    marginVertical: 5,
    color: 'black', // Define a cor do texto como azul
    backgroundColor: 'white', // Define a cor de fundo como azul claro
  },
});


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Descarte" component={Descarte}/>
        <Drawer.Screen name="Doação" component={Doação}/>
        <Drawer.Screen name="Logout" component={StackNavigator} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default DrawerNavigator;
