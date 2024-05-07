import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Inicial from './app/Inicial';
import { TabMenu } from './components/TabMenu';
import Splash from './app/Splash';
import Cadastro from './app/Cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //PARA AS NAVEGAÇÕES FUNCIONAREM TEM QUE ADICIONAR TODAS AS TELAS AQUI
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inicial"
              component={Inicial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TabMenu"
              component={TabMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ headerShown: false }}
            />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

