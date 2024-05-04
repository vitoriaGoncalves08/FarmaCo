import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const InfoBox = () => {
  return (
    <View style={styles.inputArea}>
      <TextInput style={styles.txtinput} placeholder=""/>
    </View>
  );
}

export default InfoBox;

const styles = StyleSheet.create({
  inputArea:{
    width: '100%',
    height: '45',
    marginBottom: 10,
  },
  txtinput: {
    width:'98%',
    backgroundColor: '#E3E3E3',
    height: 45,
    borderRadius: 13,
    paddingLeft: 14,
    borderWidth: 0.5,
    borderColor: '#CCCCCE',
    color: '#4F4F4F',
    marginBottom: 0,
    outline: 'none',
  },
});