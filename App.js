import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Inicial from './app/Inicial';
import Cadastro from './app/Cadastro';
import Login from './app/Login';
import Catalogo from './app/Catalogo'
import Splash from './app/Splash'
import { TabMenu } from './components/TabMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <TabMenu/>
      {/* <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Catalogo" component={Catalogo} /> *
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

