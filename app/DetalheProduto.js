import { Text, StyleSheet, Button, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Return from '../components/Return';
import Botao from '../components/Botao';
import BotaoCarrinho from '../components/BotaoCarrinho';

const DetalheProduto = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topo}>

      <View style={styles.voltar}>
          <Return href={'TabMenu'} /> {/* Alteração aqui */}
        </View>

        <View style={styles.carrinho}>
        <BotaoCarrinho href={'Carrinho'} /> {/* Alteração aqui */}
        </View>
      </View>
      <View style={styles.produtotela}>
        <Image style={styles.imgproduto}
          source={require('../assets/img/Dipirona.png')}
        />
      </View>

      <View>
        <Text style={styles.nomeproduto}>Dipirona Monoidratada 500mg
          10cpr Prati Donaduzzi</Text>
      </View>

      <View style={styles.avaliacaocontainer}>
        <View style={styles.estrelacontainer}>
          <Image style={styles.estrelinha} source={require('../assets/img/estrela.png')} />
          <Image style={styles.estrelinha} source={require('../assets/img/estrela.png')} />
          <Image style={styles.estrelinha} source={require('../assets/img/estrela.png')} />
          <Image style={styles.estrelinha} source={require('../assets/img/estrela.png')} />
          <Image style={styles.estrelinha} source={require('../assets/img/estrela.png')} />
        </View>
        <View style={styles.reacaocontainer}>
          <Image style={styles.estrelinha} source={require('../assets/img/coracao.png')} />
          <Image style={styles.estrelinha} source={require('../assets/img/compartilhar.png')} />
        </View>
      </View>

      <View style={styles.descontotext}>
        <Text>R$00,00</Text>
      </View>
      <View style={styles.precotext}>
        <Text style={styles.preco}>R$12,50</Text>
      </View>

      <ScrollView>
        <View>
          <Text style={styles.title}>Descrição</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={styles.paragraph}>Dipirona 1g Genérico Prati-Dunaduzzi 10 Comprimidos é um medicamento utilizado no tratamento
            da dor e febre. Os efeitos analgésico e antitérmico podem ser esperados em 30 a 60 minutos após a administração e geralmente persistem por
            aproximadamente 4 horas. Este medicamento é contraindicado para menores de 3 meses de idade ou pesando menos de 5 kg.</Text>
        </View>

        <View>
          <Text style={styles.title}>Especificações</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={styles.paragraph}>Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista.
            Informe imediatamente seu médico em caso de suspeita de gravidez.</Text>
        </View>

      </ScrollView>

      <View style={styles.botaocarrinho}>
        <Botao href={'Carrinho'} textBtn={'Adicionar ao carrinho'} />
      </View>

    </SafeAreaView>
  );

}

export default DetalheProduto;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    elevation: 5,
  },
  tinyLogo: {
    width: 35,
    height: 35,
  },
  nomeproduto: {
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 25,
    height: 60,
    paddingHorizontal: 24,
  },
  estrelinha: {
    width: 25,
    height: 25,
  },
  avaliacaocontainer: {
    marginTop: 15,
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  estrelacontainer: {
    flexDirection: "row",
  },

  reacaocontainer: {
    flexDirection: "row",

  },
  topo: {
    width: "95%",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: 'space-between'
  },
  voltar: {
    flexDirection: "row",
    justifyContent: "left",
  },
  carrinho: {
    justifyContent: "right",
    flexDirection: "row",
  },

  produtotela: {
    alignItems: "center",
  },

  imgproduto: {
    marginBottom: 20,
    width: 307,
    height: 337,
  },

  descontotext: {
    width:"95%",
    paddingHorizontal: 24,
    marginTop: 10,
    fontSize: 5,
    color: "#A7A7A7",
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  precotext: {
    width:"95%",
    paddingHorizontal: 24,
    fontSize: 44,
    color: "#424141",
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  preco: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  paragraph: {
    fontSize: 13,
    textAlign: 'justify',

    flexWrap: 'wrap',
  },
  descricao: {
    paddingHorizontal: 24,
    marginHorizontal: 'auto',
    maxWidth: 400,
  },

  title: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'justify',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  botaocarrinho: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height:"15%",
  },

});
