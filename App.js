import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function BemVindo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SEJA BEM VIND@ AO MAPA DO T.I!</Text>
      <View>
        <Button
      title="FAÇA SEU LOGIN"
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
      <Button
        title="Ola Usuario"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;