import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Inicial from './app/Inicial';
import Cadastro from './app/Cadastro';
import Login from './app/Login';
import Catalogo from './app/Catalogo';

const Stack = createNativeStackNavigator();

const Tela = ({navigation}) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Inicial');
    }, 3000);
    
    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/Farma.co.png')} />
      <Text style={styles.paragraph}>FARMA.CO</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tela" component={Tela} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Catalogo" component={Catalogo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#118E96',
    padding: 8
  },
  paragraph: {
    marginBottom: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-ExtraBold',
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center',
  }
});
