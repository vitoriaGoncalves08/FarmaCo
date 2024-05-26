import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Cadastro = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 4 }} behavior="padding">
        <ScrollView contentContainerStyle={{ flexGrow: 4 }}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.rtn} onPress={() => navigation.navigate("Inicial")}>
              <FontAwesome5 name="arrow-left" size={24} color="#424141" style={{margin: 15}}/>
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
    backgroundColor: '#F1F1F1',
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
    marginTop: 50
  },
  subTxt: {
    fontSize:16,
    marginBottom: 8,
    marginLeft: 10,
    marginTop: 8,
    color: '#b5b5b5',
    
  },
  inputTxt: {
    fontSize:14,
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
    width: 'stretch',
    height: 20,
    backgroundColor: '#F1F1F1',
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
    fontSize: 16,
  },
});

export default Cadastro;
