import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';

const Cadastro = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [erros, setErros] = useState({
      nome: '',
      sobrenome: '',
      dataNascimento: '', 
      cpf: '',
      email: '',
      senha: '',
      confSenha: '',
  });
  
  const validarCampos = () => {
    let errosTemp = {};

    if (!nome) {
        errosTemp.nome = 'Digite seu nome';
    }

    if (!sobrenome) {
        errosTemp.sobrenome = 'Digite seu sobrenome';
    }

    if (!dataNascimento) {
        errosTemp.dataNascimento = 'Digite sua data de nascimento';
    }
    if (!cpf){
      errosTemp.cpf = 'Digite seu CPF'
    }

    if (!email) {  
        errosTemp.email = 'Digite o email';
    }

    if (!senha) {
        errosTemp.senha = 'Digite a senha';
    }

    if (!confSenha) {
        errosTemp.confSenha = 'Confirme a senha';
    }

    setErros(errosTemp);

    return Object.keys(errosTemp).length === 0;
  };

  const handleSalvar = async () => {
    const dados = {
        id: '0',
        nome,
        sobrenome,
        dataNascimento,
        cpf,
        email,
        senha,

    };

    if (validarCampos()) {
        try {
            dados.id = Math.floor(Math.random() * 10000) + '';
            await AsyncStorage.setItem(dados.id, JSON.stringify(dados), () => {
                console.warn('Dados salvos no AsyncStorage com sucesso!');
                navigation.navigate('Login', {dados});
            });
        } catch (error) {
            console.warn('Erro ao salvar os dados no AsyncStorage:', error);
        }
    }
  };
  
  
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
            {erros.nome !== '' ? <Text style={styles.erro}>{erros.nome}</Text> : <Text></Text>}
            <Text style={styles.inputTxt}>Nome</Text>
            <View style={styles.txtArea}>
              <TextInput onChangeText={setNome}  value={nome} style={styles.txtinput} placeholder=""/>
            </View>
            {erros.sobrenome !== '' ? <Text style={styles.erro}>{erros.sobrenome}</Text> : <Text></Text>}
            <Text style={styles.inputTxt}>Sobrenome</Text>
            <View style={styles.txtArea}>
              <TextInput onChangeText={setSobrenome} value={sobrenome} style={styles.txtinput} placeholder=""/>
            </View>
            {erros.dataNascimento !== '' ? <Text style={styles.erro}>{erros.dataNascimento}</Text> : <Text></Text>}
            <Text style={styles.inputTxt}>Data de nascimento</Text>
            <View style={styles.txtArea}>
              <TextInput maxLength={10} onChangeText={setDataNascimento} value={dataNascimento} style={styles.txtinput} placeholder="  /  /    "/>
            </View>
            {erros.cpf !== '' ? <Text style={styles.erro}>{erros.cpf}</Text> : <Text></Text>}
            <Text style={styles.inputTxt}>CPF</Text>
            <View style={styles.txtArea}>
              <TextInput maxLength={14} onChangeText={setCpf} value={cpf} style={styles.txtinput} placeholder=""/>
            </View>
            {erros.email !== '' ? <Text style={styles.erro}>{erros.email}</Text> : <Text></Text>}
            <Text style={styles.inputTxt}>E-mail</Text>
            <View style={styles.txtArea}>
              <TextInput keyboardType="email-address" onChangeText={setEmail}  value={email} style={styles.txtinput} placeholder=""/>
            </View>
            {erros.senha !== '' ? <Text style={styles.erro}>{erros.senha}</Text> : <Text></Text>}
            <Text style={styles.inputTxt}>Senha</Text>
            <View style={styles.inputWithIcon}>
              <TextInput 
                onChangeText={setSenha}
                style={styles.txtinput}
                secureTextEntry={true}
                placeholder=""
                value={senha}
              />
              <TouchableOpacity>
              </TouchableOpacity>
            </View>
            {erros.confSenha !== '' ? <Text style={styles.erro}>{erros.confSenha}</Text> : <Text></Text>}
            <Text style={styles.inputTxt}>Confirmar senha</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                onChangeText={setConfSenha}
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
              <TouchableOpacity style={styles.btnEnter} onPress={handleSalvar}>
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
    marginBottom: 8,
    marginLeft: 10,
    marginTop: 8,
    color: '#b5b5b5',
    
  },
  erro: {
    color: 'red',
    marginTop:5,
    marginLeft: 10,
  },
  inputTxt: {
    fontSize:14,
    marginBottom: 5,
    marginLeft: 10,
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
    outlineStyle: "none",
    placeholderTextColor: "#A7A7A7"
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
    color: '#118E96',
  },
  loginBtnArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnEnter: {
    width: '95%',
    height: 45,
    borderRadius: 20,
    backgroundColor: '#118E96',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 95,

  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Cadastro;
