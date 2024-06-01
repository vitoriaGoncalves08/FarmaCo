import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import Return from '../components/Return';
import BotaoCarrinho from '../components/BotaoCarrinho';
import Botao from '../components/Botao';

const DetalheProduto = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topo}>
          <View style={styles.voltar}>
            <Return href={'PesquisarProduto'} />
          </View>
          <View style={styles.carrinho}>
            <BotaoCarrinho href={'Carrinho'} />
          </View>
        </View>
        <View style={styles.produtotela}>
          <Image
            style={styles.imgproduto}
            source={require('../assets/img/Dipirona.png')}
          />
        </View>
        <Text style={styles.nomeproduto}>
          Dipirona Monoidratada 500mg 10cpr Prati Donaduzzi
        </Text>
        <View style={styles.avaliacaocontainer}>
          <View style={styles.estrelacontainer}>
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
          </View>
          <View style={styles.reacaocontainer}>
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/coracao.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/compartilhar.png')}
            />
          </View>
        </View>
        <View style={styles.descontotext}>
          <Text>R$00,00</Text>
        </View>
        <View style={styles.precotext}>
          <Text style={styles.preco}>R$12,50</Text>
        </View>
        <View>
          <Text style={styles.title}>Descrição</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={styles.paragraph}>
            Dipirona 1g Genérico Prati-Dunaduzzi 10 Comprimidos é um medicamento
            utilizado no tratamento da dor e febre. Os efeitos analgésico e
            antitérmico podem ser esperados em 30 a 60 minutos após a
            administração e geralmente persistem por aproximadamente 4 horas.
            Este medicamento é contraindicado para menores de 3 meses de idade
            ou pesando menos de 5 kg.
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Especificações</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={styles.paragraph}>
            Este medicamento não deve ser utilizado por mulheres grávidas sem
            orientação médica ou do cirurgião-dentista. Informe imediatamente
            seu médico em caso de suspeita de gravidez.
          </Text>
        </View>
        <View style={styles.botaocarrinho}>
          <Botao href={'Carrinho'} textBtn={'Adicionar ao carrinho'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetalheProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 8,
  },
  nomeproduto: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  estrelinha: {
    width: 25,
    height: 25,
  },
  avaliacaocontainer: {
    marginTop: 15,
    paddingHorizontal: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  estrelacontainer: {
    flexDirection: 'row',
  },
  reacaocontainer: {
    flexDirection: 'row',
  },
  topo: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  voltar: {
    flexDirection: 'row',
  },
  carrinho: {
    flexDirection: 'row',
  },
  produtotela: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imgproduto: {
    width: '80%',
    height: undefined,
    aspectRatio: 207 / 237, // Mantém a proporção da imagem
    resizeMode: 'contain',
  },
  descontotext: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 10,
    fontSize: 15,
    color: '#A7A7A7',
    textAlign: 'left',
  },
  precotext: {
    width: '100%',
    paddingHorizontal: 16,
    fontSize: 44,
    color: '#424141',
    textAlign: 'left',
  },
  preco: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'justify',
    flexWrap: 'wrap',
  },
  descricao: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  botaocarrinho: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginVertical: 2,
  },
});
