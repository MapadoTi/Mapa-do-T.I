import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function BemVindo({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SEJA BEM VIND@ AO MAPA DO T.I!</Text>
      <View>
        <TouchableOpacity>
      title="FAÇA SEU LOGIN"
    onPress={() => navigation.navigate('login')}
    </TouchableOpacity>
      </View>
    </View>
  );
}