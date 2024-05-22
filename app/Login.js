import React, {useState, useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View, Alert  } from 'react-native';
import InputText from '../components/InputText';
import Botao from '../components/Botao';
import Return from '../components/Return';
import InputPassword  from '../components/InputPassword';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({route}) => {
  const navigation = useNavigation();

  const [storedEmail, setStoredEmail] = useState('');
  const [storedSenha, setStoredSenha] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');

    useEffect(() => {
        const getDadosSalvos = async () => {
            try {
                const dados = await AsyncStorage.getItem(route.params.dados.id);
                if (dados) {
                  const { email, senha } = JSON.parse(dados);
                  setStoredEmail(email);
                  setStoredSenha(senha);
                  console.warn(`Dados acessados no AsyncStorage com sucesso! Email: ${email}, ${senha}`);
                }
            } catch (error) {
                console.error('Erro ao recuperar os dados salvos do AsyncStorage:', error);
            }
        };

        getDadosSalvos();
    }, []); 

  const handleLogin = () => {
    if (inputEmail === storedEmail && inputSenha === storedSenha) {
      Alert.alert('Login bem-sucedido!');
      navigation.navigate('Catalogo');
    } else {
      Alert.alert('Email ou senha incorretos.');
      console.error('Não foi possível se conectar a conta');
      console.warn(`Os dados não são possíveis de se comparar! Email: ${inputEmail}, ${inputSenha}`);
    }
  };

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <Return href={'Cadastro'}/>
        <Text style={styles.mainTxt}>Login</Text>
        <Text style={styles.inputTxt}>E-mail</Text>
        <InputText value={inputEmail} onChangeText={setInputEmail}/>
        <Text style={styles.inputTxt}>Senha</Text>
        <InputPassword value={inputSenha} onChangeText={setInputSenha}/>
        <View style={styles.loginArea}>
          <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginTxt}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <Image style={styles.passIcon} source={require('../assets/img/cadeado.png')} />
        </View>
        <View style={styles.loginBtnaArea}>
          <TouchableOpacity style={styles.btnEnter} onPress={handleLogin}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8
  },
  column: {
    marginBottom: 100,
    width: '92%',
    height: 'stretch',
  },
  mainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    marginLeft:10, 
  },
  inputTxt: {
    fontSize:14,
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 0,
    color: '#b5b5b5',
  },
  loginArea: {
    flexDirection: 'row',
    marginTop: 0,
    marginRight: 10,
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
  passIcon: {
    width: 10,
    height: 10,
    marginTop: 5,
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
})