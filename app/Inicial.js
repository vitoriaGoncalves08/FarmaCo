import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Inicial = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        FARMA.CO
      </Text>
      <Image style={styles.svginicial} source={require('../assets/img/Medical.png')} />
      <Text style={styles.centraltxt}>
        Vamos lá!
      </Text>
      <View style={styles.subtxtcont}>
        <Text style={styles.subtxt}>
          Assim como a saúde deveria ser universal, o seu acesso deveria ser a mesma maneira.
        </Text>
        <TouchableOpacity
          style={styles.btnEnter}
          onPress={() => navigation.navigate('Catalogo')}>
          <Text style={styles.buttonText}>Começar sem login</Text>
        </TouchableOpacity>
        <View style={styles.sair}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.btnLoginTxt}>Cadastrar minha conta</Text>
            <MaterialCommunityIcons style={styles.sairIcon} name="exit-to-app" size={24} color="#424141" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Inicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    marginTop: 60,
    marginBottom: 60,
    color: '#b5b5b5',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  svginicial: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  centraltxt: {
    fontSize: 22,
    color: '#090B0B',
    margin: 10,
    fontFamily: 'Helvetica'
  },
  subtxtcont: {
    width: 300,
    height: 70,
    alignItems: 'center',
  },
  subtxt: {
    fontSize: 13,
    marginBottom: 40,
    textAlign: 'center',
    color: '#5C7070',
  },
  btnEnter: {
    width: 310,
    height: 40,
    color: '#118E96',
    borderRadius: 20,
    backgroundColor: '#118E96',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: '',
    fontSize: 14,
  },
  sair: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: 220,
    height: 55,
    backgroundColor: 'white',
  },
  btnLogin: {
    width: 180,
    height: 38,
    color: 'green',
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  btnLoginTxt: {
    color: '#C0C0C0',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: '',
    fontSize: 13,
  },
  sairIcon: {
    width: 10,
    height: 10,
    marginLeft: 4,
    color: '#C0C0C0',
  }
});
