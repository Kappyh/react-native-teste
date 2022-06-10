import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import OlaMundo from './components/OlaMundo';
import Mensagem from './components/Mensagem';
import DimensoesFixas from "./components/DimensoesFixas";

export default function App() {
  return (
    <View>
      {/*<OlaMundo nome="Gabi"/>*/}
      {/*<Mensagem />*/}
      <StatusBar style="auto" />
      <DimensoesFixas/>
    </View>
  );
}
