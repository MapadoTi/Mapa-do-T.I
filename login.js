import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      

      <StatusBar style="auto" />
      <button onclick="myFunction()">ENTRAR</button>

    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#231F20',
    width: 600,
    heigth: 200
  },
});