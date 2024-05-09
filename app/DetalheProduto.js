import { Text, StyleSheet, Button, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, ScrollView } from 'react-native-web';

const DetalheProduto = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.imgproduto} 
        source={require('../assets/img/Dipirona.png')} 
        />
      <View>
        <Text style={styles.nomeproduto}>Dipirona Monoidratada 500mg
         10cpr Prati Donaduzzi</Text>
      </View>

      <View style={styles.avaliacaocontainer}>

      <View style={styles.estrelacontainer}>
        <Image style={styles.estrelinha} 
        source={require('../assets/img/estrela.png')} 
        />
        <Image style={styles.estrelinha} 
        source={require('../assets/img/estrela.png')} 
        />
        <Image style={styles.estrelinha} 
        source={require('../assets/img/estrela.png')} 
        />
        <Image style={styles.estrelinha} 
        source={require('../assets/img/estrela.png')} 
        />
        <Image style={styles.estrelinha} 
        source={require('../assets/img/estrela.png')} 
        />
        
      </View>

      <View style={styles.reacaocontainer} >
      <Image style={styles.estrelinha} 
        source={require('../assets/img/coracao.png')} 
        />
        <Image style={styles.estrelinha} 
        source={require('../assets/img/compartilhar.png')} 
        />
      </View>

      </View>

      <View  style={styles.descontotext}>
      <Text>R$00,00</Text>
      </View>
      <View  style={styles.precotext}>
      <Text>R$12,50</Text>
      </View>

      <ScrollView>
      <View>
        <Text style={styles.title}>Descrição</Text>
      </View>
      <View>
        <Text style={styles.paragraph}>Dipirona 1g Genérico Prati-Dunaduzzi 10 Comprimidos é um medicamento utilizado no tratamento 
        da dor e febre. Os efeitos analgésico e antitérmico podem ser esperados em 30 a 60 minutos após a administração e geralmente persistem por
         aproximadamente 4 horas. Este medicamento é contraindicado para menores de 3 meses de idade ou pesando menos de 5 kg.</Text>
      </View>

      <View>
        <Text style={styles.title}>Especificações</Text>
      </View>
      <View>
        <Text style={styles.paragraph}>Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista. 
        Informe imediatamente seu médico em caso de suspeita de gravidez.</Text>
      </View>

      </ScrollView>

      <View>
        <Button title="Adicionar ao carrinho" />
      </View>

     
     
      
      
    </SafeAreaView>
  );
    
}

export default DetalheProduto;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    elevation: 5,
  },
    tinyLogo:{
      width: 35,
      height: 35,
    },
    nomeproduto:{
     fontWeight: 'bold',
     justifyContent: 'center',
     fontSize: 25,
     height: 60,
     left: 24,
     right: 24,
    },
    estrelinha:{
      width: 25,
      height: 25,
    },
    avaliacaocontainer:{
      marginTop: 15,
      left: 24,
      right:24,
      width:"100%",
      flexDirection:"row",
      justifyContent:"left",
    },
    estrelacontainer:{      
      flexDirection:"row",
     
    },
    reacaocontainer:{
      left: 180,
      right:24,
      flexDirection:"row",
      
    },
  
  imgproduto:{
    marginTop:35,
    width: 307,
    height: 337,
    alignItems: 'center',
    top: 50,
    left: 62,

  },
  descontotext:{
    marginTop:10,
    fontSize: 5,
    left: 24,
    color:"#A7A7A7",
  },
  precotext:{
    fontSize: 44,
    left: 24,
    color:"#424141",
  },
  paragraph: {
    height: 80,
    fontSize: 13,
    textAlign: 'justify',
    justifyContent: 'center',
    left: 24,
    right:24,
  },
  title:{
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'justify',
    justifyContent: 'center',
    left: 24,
    right:24,
  },
  
});
