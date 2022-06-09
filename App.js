import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaMundo from './components/OlaMundo';
import Mensagem from './components/Mensagem';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundo nome="Gabi"/>
      <Mensagem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
