import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";



const Return = ({href}) =>{
  const navigation = useNavigation();

  return(
  <TouchableOpacity style={styles.rtn}
    onPress={() => navigation.navigate(href)}>
    <Image style={styles.rtnbtn} source={require('../assets/return.png')} />
  </TouchableOpacity>
  );
}

export default Return;

const styles = StyleSheet.create({
    rtnbtn:{
    width: 20,
    height: 20,
    marginBottom: 20,
    marginLeft:10, 
  },
})