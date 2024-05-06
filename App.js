import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import {
  TextInput,DefaultTheme,Provider as PaperProvider,TargetComponent,List,Checkbox } from 'react-native-paper';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imgbkg1 = './assets/welcome.png';
///1080 por 1920
function BemVindo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        source={require('./assets/welcome.png')}
        style={styles.image}>
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
            onPress={() => navigation.navigate('Login')}>
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
      <ImageBackground
        source={require('./assets/Design_sem_nome-removebg-preview.png')}
        style={styles.icone}
      />
      <ImageBackground
        source={require('./assets/senai-logo-0.webp')}
        style={styles.logo}
      />
      <ImageBackground
        source={require('./assets/IconePerfil.png')}
        style={styles.iconePerfil}
      />
      <Image
        source={require('./assets/Design_sem_nome__3_-removebg-preview.png')}
        style={styles.icone2}
      />

      <View style={styles.containerInput}>
        <TextInput
          label="EMAIL"
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
          label="SENHA"
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

        <View style={styles.containerTextos}> 
          <Text style={styles.textMeLembre}>ME LEMBRE</Text>
          <Text style={styles.textEsqueceuSenha}>ESQUECEU A SENHA?</Text>
        </View>

        <LinearGradient
          colors={['#5DE0E6', '#0078A6']}
          style={{ borderRadius: 30, top: 30}}
          start={{ x: 0, y: 0.5 }} 
          end={{ x: 1, y: 0.5 }}
        >
          <TouchableOpacity
              style={{
                margin: 12,
                height: 20,
                width: 120,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 0,
                fontSize: 16,
              }}
              onPress={handleLogin}>
              <Text style={{ color: 'white', fontWeight: 'bold'}}>ENTRAR</Text>
          </TouchableOpacity>
        </LinearGradient>
        
      </View>

      <View 
        style={{
          backgroundColor: '#00508F', 
          height: 5, 
          width: 380, 
          zIndex: 5, 
          top: '78%',
          position: 'absolute'}} /> 
    </View>
  );
}

function Home() {
  const [checkedItems, setCheckedItems] = useState([]);
  const handleCheckboxPress = (itemTitle) => {
    if (checkedItems.includes(itemTitle)) {
      setCheckedItems(checkedItems.filter((title) => title !== itemTitle));
    } else {
      setCheckedItems([...checkedItems, itemTitle]);
    }
  };

  return (
      <List.Section title="BETA">
        <List.Accordion
          title="LAB 01"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          {[1, 2, 3, 4].map((i) => (
            <List.Item
              key={`PC 0${i}`}
              title={`PC 0${i}`}
              right={() => (
                <Checkbox.Item
                  status={checkedItems.includes(`PC 0${i}`) ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxPress(`PC 0${i}`)}
                  color="#007AFF"
                  checkedIcon="check"
                />
              )}
            />
          ))}
        </List.Accordion>

        <List.Accordion
          title="LAB 02"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          {[1, 2, 3, 4].map((i) => (
            <List.Item
              key={`PC 0${i}`}
              title={`PC 0${i}`}
              right={() => (
                <Checkbox.Item
                  status={checkedItems.includes(`PC 0${i}`) ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxPress(`PC 0${i}`)}
                  color="#007AFF"
                  checkedIcon="check"
                />
              )}
            />
          ))}
        </List.Accordion>

        <List.Accordion
          title="SECRETARIA"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          {[1, 2, 3, 4].map((i) => (
            <List.Item
              key={`PC 0${i}`}
              title={`PC 0${i}`}
              right={() => (
                <Checkbox.Item
                  status={checkedItems.includes(`PC 0${i}`) ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxPress(`PC 0${i}`)}
                  color="#007AFF"
                  checkedIcon="check"
                />
              )}
            />
          ))}
        </List.Accordion>

         <List.Accordion
          title="DIREÇÃO"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          {[1, 2, 3].map((i) => (
            <List.Item
              key={`PC 0${i}`}
              title={`PC 0${i}`}
              right={() => (
                <Checkbox.Item
                  status={checkedItems.includes(`PC 0${i}`) ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxPress(`PC 0${i}`)}
                  color="#007AFF"
                  checkedIcon="check"
                />
              )}
            />
          ))}
        </List.Accordion>
      </List.Section>
  );
}

function Descarte() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={{ width: 400, height: 700 }}
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

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{ headerShown: false }}
      />
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

  containerInput: {
    backgroundColor: '#EBEDF2',
    width: 360,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    bottom: 510,
    zIndex: 1,
  },

  logo: {
    position: 'relative',
    left: '32%',
    bottom: '20%',
    width: 130,
    height: 130,
  },

  icone: {
    width: 560,
    height: 430,
    position: 'relative',
    right: '45%',
    top: 150,
    transform: [{ rotate: '-10deg' }],
  },

  icone2: {
    width: 260,
    height: 430,
    position: 'relative',
    top: '40%',
    left: 120,
    // transform: [{ rotate: '-10deg' }]
    zIndex: 4,
  },

  iconePerfil: {
    position: 'absolute',
    height: 200,
    width: 800,
    zIndex: 2,
    bottom: '65%',
  },

  iconeEmail: {
    position: 'relative',
    width: 200,
    height: 200,
    marginRight: 10,
  },

  textEsqueceuSenha: {
    fontSize: 10,
    color: '#38B6FF',
    marginLeft: 180,
    bottom: 12
  },

  textMeLembre: {
    fontSize: 10,
    color: '#38B6FF',
    marginRight: 180
  },

  containerTextos: {
   
  }
});

const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Descarte" component={Descarte} />
          <Drawer.Screen name="Doação" component={Doação} />
          <Drawer.Screen
            name="Logout"
            component={StackNavigator}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default DrawerNavigator;
