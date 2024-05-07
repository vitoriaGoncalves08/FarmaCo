import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Inicial from './app/Inicial';
import { TabMenu } from './components/TabMenu';
import Splash from './app/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
        </Stack.Navigator>
      </NavigationContainer>

  );
}

