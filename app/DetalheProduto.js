import { Text, StyleSheet, Button, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-web';

const DetalheProduto = () => {
  const navigation = useNavigation();

  const Estrela = ({item}) => (
    <View style={styles.containerEstrela}>
       
        <Image
            style={styles.tinyLogo}
            source={require('../assets/img/estrela.png')}
        />
        <Text style={styles.paragraph}>{item.nome}</Text>
    </View>

    );
const ListaEstrelasHorizontal = () => {
    return (
        <FlatList
            renderItem={Estrela}
            keyExtractor={item => item.id}
            horizontal={true}
        />
    );
}
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.imgproduto} source={require('../assets/img/Dipirona.png')} />
      <View>
        <Text style={styles.nomeproduto}>Dipirona Monoidratada 500mg
         10cpr Prati Donaduzzi</Text>
      </View>
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

      <View style={styles.container}>
      <Image
            style={styles.tinyLogo}
            source={require('../assets/img/mais.png')}
            onPress={() => setCount(count + 1)} title="Clique aqui!!!"
        />
      
     </View>
    
      <View>
        <Button title="Adicionar ao carrinho" />
      </View>
    </SafeAreaView>
  );
    
}

export default DetalheProduto;

const styles = StyleSheet.create({
    tinyLogo:{
    width: 20,
    height: 337,
    },
    nomeproduto:{
     fontWeight: 'bold',
     justifyContent: 'center',
     fontSize: 25,
     height: 60,
     left: 24,
     right: 24,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imgproduto:{
    marginTop:35,
    width: 307,
    height: 337,
    alignItems: 'center',
    top: 50,
    left: 62,

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
