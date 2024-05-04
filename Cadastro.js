import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Cadastro = () => {
  const navigation = useNavigation();


  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 4 }} behavior="padding">
        <ScrollView contentContainerStyle={{ flexGrow: 4 }}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.rtn} onPress={() => navigation.navigate("Inicial")}>
              <Image style={styles.rtnbtn} source={require('./assets/return.png')} />
            </TouchableOpacity>
            <Text style={styles.mainTxt}>Cadastre-se e conheça nossa variedade de produtos!</Text>
            <Text style={styles.subTxt}>Preencha os dados abaixo para continuar</Text>
            <Text style={styles.inputTxt}>Nome</Text>
            <View style={styles.txtArea}>
              <TextInput style={styles.txtinput} placeholder=""/>
            </View>
            <Text style={styles.inputTxt}>E-mail</Text>
            <View style={styles.txtArea}>
              <TextInput style={styles.txtinput} placeholder=""/>
            </View>
            <Text style={styles.inputTxt}>CPF</Text>
            <View style={styles.txtArea}>
              <TextInput style={styles.txtinput} placeholder=""/>
            </View>
            <Text style={styles.inputTxt}>Senha</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.txtinput}
                secureTextEntry={true}
                placeholder=""
              />
              <TouchableOpacity>
                <Image style={styles.revealbtn} source={require('./assets/reveal.png')} />
              </TouchableOpacity>
            </View>
            <Text style={styles.inputTxt}>Confirmar senha</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.txtinput}
                secureTextEntry={true}
                placeholder=""
              />
              <TouchableOpacity>
                <Image style={styles.revealbtn} source={require('./assets/reveal.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.loginArea}>
              <Text style={styles.loginTxt}>Já tem conta?</Text>
              <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginBtnTxt}>Entrar.</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginBtnArea}>
              <TouchableOpacity style={styles.btnEnter} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8
  },
  column: {
    marginTop:5,
    width: '100%',
    marginLeft: 0,
    height: 'stretch',
    padding: 10,
  },
  rtnbtn:{
    width: 20,
    height: 20,
    marginBottom: 15,
    marginLeft: 10, 
  },
  mainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10, 
  },
  subTxt: {
    fontSize:16,
    fontWeight: '',
    marginBottom: 8,
    marginLeft: 10,
    marginTop: 8,
    color: '#b5b5b5',
    
  },
  inputTxt: {
    fontSize:14,
    fontWeight: '',
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 10,
    color: '#b5b5b5',
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
  txtArea: {
    width: '100%',
    height: '45',
    alignItems: 'center',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  revealbtn:{
    width: 18,
    height: 18,
    position: 'absolute',
    right:12,
    marginTop: -9,
  },
  loginArea: {
    flexDirection: 'row',
    marginTop: 0,
    marginRight: 17,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: 'stretch',
    height: 20,
  },
  loginTxt: {
    fontSize: 13,
    color: '#b5b5b5',
  },
  loginBtn: {
    marginLeft: 2,
  },
  loginBtnTxt: {
    fontSize: 13,
    fontWeight: '',
    color: '#118E96',
  },
  loginBtnArea: {
    width: '100%',
    alignItems: 'center',
  },
  btnEnter: {
    width: '95%',
    top: 40,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#118E96',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: '',
    fontSize: 16,
  },
});

export default Cadastro;
