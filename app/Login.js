import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View  } from 'react-native';
import InputText from '../components/InputText';
import Botao from '../components/Botao';
import Return from '../components/Return';
import InputPassword  from '../components/InputPassword';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();

  const [dadosSalvos, setDadosSalvos] = useState(null);

    useEffect(() => {
        const getDadosSalvos = async () => {
            try {
                const dados = await AsyncStorage.getItem(route.params.dados.id);
                if (dados) {
                    setDadosSalvos(JSON.parse(dados));
                }
            } catch (error) {
                console.error('Erro ao recuperar os dados salvos do AsyncStorage:', error);
            }
        };

        getDadosSalvos();
    }, []); 


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <Return href={'Cadastro'}/>
        <Text style={styles.mainTxt}>Login</Text>
        <Text style={styles.inputTxt}>E-mail</Text>
        <InputText/>
        <Text style={styles.inputTxt}>Senha</Text>
        <InputPassword />
        <View style={styles.loginArea}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginTxt}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <Image style={styles.passIcon} source={require('../assets/img/cadeado.png')} />
        </View>
        <Botao href={'Catalogo'} textBtn={'Login'}/> 
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
  }
})