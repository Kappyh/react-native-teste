import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import OlaMundo from './components/OlaMundo';
import Mensagem from './components/Mensagem';
import DimensoesFixas from "./components/DimensoesFixas";
import ChecaNumero from "./components/ChecaNumero";
import Evento from "./components/Evento";
import UsuarioGithub from "./components/UsuarioGithub";

export default function App() {
  return (
    <SafeAreaView>
      {/*<OlaMundo nome="Gabi"/>*/}
      {/*<Mensagem />*/}
      {/*  <ChecaNumero numero={4} />*/}
      {/*  <Evento />*/}
        <UsuarioGithub/>
      <StatusBar style="auto" />
      {/*<DimensoesFixas/>*/}
    </SafeAreaView>
  );
}
