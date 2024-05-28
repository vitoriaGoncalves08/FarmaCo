import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const Produtos = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 1,
      nomeProduto: 'Dipirona Sódica 500mg Genérico EMS 10 Comprimidos',
      descricao: 'Dipirona Sódica 500mg EMS é um medicamento analgésico e antitérmico, sendo utilizado no alívio da dor e da febre.',
      preco: 'R$ 12,75',
      imagemProduto: require('../assets/img/remedios/2.png'),
    },
    {
      id: 2,
      nomeProduto: 'Cimegripe 400mg Cimed 20 Cápsulas',
      descricao: 'Cimegripe 400mg Cimed é utilizado para tratamento dos sintomas de gripes e resfriados como congestão nasal, coriza, febre, dores de cabeça e dores musculares.',
      preco: 'R$ 12,90',
      imagemProduto: require('../assets/img/remedio.png'),
    },
    {
      id: 3,
      nomeProduto: 'Analgésico Dorflex Sanofi 50 Comprimidos',
      descricao: 'O Analgésico Dorflex Sanofi é utilizado para o tratamento de dores no corpo, associadas à contraturas musculares, processos traumáticos ou inflamatórios.',
      preco: 'R$ 26,90',
      imagemProduto: require('../assets/img/remedio.png'),
    },
    {
      id: 4,
      nomeProduto: 'Xarope Vick Guaifenesina 44E 120ml',
      descricao: 'Xarope Vick Guaifenesina é expectorante que alivia a tosse que acompanha gripes e resfriados e alivia a tosse seca e com catarro.',
      preco: 'R$ 30,90',
      imagemProduto: require('../assets/img/remedio.png'),
    },
  ];

  const Remedio = ({ item }) => (
    <View style={styles.prodRow}>
      <TouchableOpacity
        style={styles.cardPress}
        onPress={() => navigation.navigate('DetalheProduto')}
      >
        <View style={styles.prodBox}>
          <View style={styles.discountArea}>
            <Text style={styles.discountTxt}>-10%</Text>
          </View>
          <Image
            style={styles.prodImage}
            source={item.imagemProduto}
          />
          <View style={styles.infoProdArea}>
            <Text style={styles.productName}>
              {item.nomeProduto}
            </Text>
            <Text style={styles.productDesc}>{item.descricao}</Text>
            <Text style={styles.productValue}>{item.preco}</Text>
          </View>
          <View style={styles.btnProductArea}>
            <TouchableOpacity style={styles.btnProduct}>
              <Text style={styles.btnProductTxt}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={Remedio}
          keyExtractor={item => item.id}
          horizontal={false}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  prodRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardPress: {
    width: (screenWidth / 2) - 25, // Subtract padding/margin
    marginVertical: 10,
  },
  prodBox: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    padding: 10,
    alignItems: "center",
    shadowColor: "black",
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  discountArea: {
    width: "100%",
    alignItems: "flex-end",
  },
  discountTxt: {
    backgroundColor: "rgba(112, 149, 18, 0.2)",
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    fontWeight: "bold",
    color: "#4D8811",
  },
  prodImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  infoProdArea: {
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  productDesc: {
    fontSize: 12,
    marginBottom: 5,
    color: "#666",
    textAlign: "center",
  },
  productValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  btnProductArea: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  btnProduct: {
    width: "80%",
    backgroundColor: "#118E96",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
  },
  btnProductTxt: {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: "bold",
  },
});

export default Produtos;