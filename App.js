import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, SafeAreaView } from 'react-native';
import OlaMundo from './components/OlaMundo';
import Mensagem from './components/Mensagem';
import DimensoesFixas from "./components/DimensoesFixas";
import ChecaNumero from "./components/ChecaNumero";
import Evento from "./components/Evento";
import UsuarioGithub from "./components/UsuarioGithub";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaView>
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name={Evento} component={Evento} />
              <Drawer.Screen name={Github} component={UsuarioGithub} />
          </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
