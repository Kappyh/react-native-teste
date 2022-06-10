import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {View, Button} from 'react-native';
import OlaMundo from './components/OlaMundo';
import Mensagem from './components/Mensagem';
import DimensoesFixas from "./components/DimensoesFixas";
import ChecaNumero from "./components/ChecaNumero";
import Evento from "./components/Evento";
import UsuarioGithub from "./components/UsuarioGithub";

function TelaInicial({navigation}){
    return(
        <View>
            <Button title={'Evento'} onPress={()=>navigation.navigate('Evento')}></Button>
            <Button title={'Usuario Github'} onPress={()=>navigation.navigate('Github')}></Button>
        </View>
    );
}

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
          {/*<Drawer.Navigator>*/}
          {/*    <Drawer.Screen name={'Evento'} component={Evento} />*/}
          {/*    <Drawer.Screen name={'Github'} component={UsuarioGithub} />*/}
          {/*</Drawer.Navigator>*/}
          {/*<Stack.Navigator>*/}
          {/*    <Stack.Screen name={'Home'} component={TelaInicial} />*/}
          {/*    <Stack.Screen name={'Evento'} component={Evento} />*/}
          {/*    <Stack.Screen name={'Github'} component={UsuarioGithub} />*/}
          {/*</Stack.Navigator>*/}
          <Tab.Navigator>
              <Tab.Screen name={'Evento'} component={Evento} />
              <Tab.Screen name={'Github'} component={UsuarioGithub} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}
