import React from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const Produtos = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 1,
      nomeProduto: "Dipirona Sódica 500mg Genérico EMS 10 Comprimidos",
      descricao:
        "Dipirona Sódica 500mg EMS é um medicamento analgésico e antitérmico, sendo utilizado no alívio da dor e da febre.",
      preco: "R$ 12,75",
      imagemProduto: require("../assets/img/remedios/remedio.png"),
    },
    {
      id: 2,
      nomeProduto: "Cimegripe 400mg Cimed 20 Cápsulas",
      descricao:
        "Cimegripe 400mg Cimed é utilizado para tratamento dos sintomas de gripes e resfriados como congestão nasal, coriza, febre, dores de cabeça e dores musculares.",
      preco: "R$ 12,90",
      imagemProduto: require("../assets/img/remedios/2.png"),
    },
    {
      id: 3,
      nomeProduto: "Analgésico Dorflex Sanofi 50 Comprimidos",
      descricao:
        "O Analgésico Dorflex Sanofi é utilizado para o tratamento de dores no corpo, associadas à contraturas musculares, processos traumáticos ou inflamatórios.",
      preco: "R$ 26,90",
      imagemProduto: require("../assets/img/remedios/3.png"),
    },
    {
      id: 4,
      nomeProduto: "Xarope Vick Guaifenesina 44E 120ml",
      descricao:
        "Xarope Vick Guaifenesina é expectorante que alivia a tosse que acompanha gripes e resfriados e alivia a tosse seca e com catarro.",
      preco: "R$ 30,90",
      imagemProduto: require("../assets/img/remedios/4.png"),
    },
    {
      id: 5,
      nomeProduto: "Pastilhas para Garganta Strepsils Mel e Limão 8 Pastilhas",
      descricao:
        "Pastilhas para Garganta Strepsils Mel e Limão é um medicamento analgésico e anti-inflamatório, indicado para aliviar dor de garganta.",
      preco: "R$ 14,47",
      imagemProduto: require("../assets/img/remedios/5.png"),
    },
    {
      id: 6,
      nomeProduto:
        "Losartana Potássica Medley 50mg, caixa com 30 comprimidos revestidos",
      descricao:
        "Losartana Potássica é um medicamento para tratar hipertensão (pressão alta) ou doença conhecida como insuficiência cardíaca (enfraquecimento do coração).",
      preco: "R$ 2,60",
      imagemProduto: require("../assets/img/remedios/6.png"),
    },
    {
      id: 7,
      nomeProduto: "Ibuprofeno 600mg Genérico Prati Donaduzzi 20 Comprimidos",
      descricao:
        "Ibuprofeno 600mg Genérico Prati Donaduzzi 20 Comprimidos combate inflamação, dor e febre, sendo indicado para aliviar sintomas de osteoartrite, artrite reumatoide, reumatismo.",
      preco: "R$ 8,45",
      imagemProduto: require("../assets/img/remedios/7.png"),
    },
    {
      id: 8,
      nomeProduto: "Loratamed 10mg Cimed 12 Comprimidos",
      descricao:
        "Loratamed 10mg Cimed (loratadina) é um anti-histamínico utilizado para alívio de sintomas associados a rinite alérgica como coriza, coceira nasal, espirros, ardência.",
      preco: "R$ 8,50",
      imagemProduto: require("../assets/img/remedios/8.png"),
    },
    {
      id: 9,
      nomeProduto: "Soro Fisiológico Ever Care 500ml",
      descricao:
        "Soro Fisiológico é uma solução salina esterilizada utilizada para diversas finalidades como a desidratação, além de usos para limpeza da pele, dos olhos e nariz, queimaduras ou feridas e também para fazer nebulizações.",
      preco: "R$ 7,99",
      imagemProduto: require("../assets/img/remedios/9.png"),
    },
    {
      id: 10,
      nomeProduto: "Lacrifilm 10ml Colírio",
      descricao:
        "O Lacrifilm Colírio é indicado para o tratamento de problemas oftalmológicos como ressecamento nos olhos, ardência, coceira, exposição ao sol, vento e mar.",
      preco: "R$ 28,99",
      imagemProduto: require("../assets/img/remedios/10.png"),
    },
    {
      id: 11,
      nomeProduto: "Laxante Fitoterápico Lacto-Purga Blister 6 Comprimidos",
      descricao:
        "Lacto-Purga (bisacodil) é um laxante de ação local indicado para tratamento da prisão de ventre.",
      preco: "R$ 5,79",
      imagemProduto: require("../assets/img/remedios/11.png"),
    },
    {
      id: 12,
      nomeProduto: "Simeticona Gotas 75mg/ml Genérico Cimed 15ml",
      descricao:
        "Simeticona Gotas 75mg/ml Genérico Cimed com 15ml é indicado para tratar pacientes com excesso de gases no aparelho digestivo e aliviar sintomas como desconforto.",
      preco: "R$ 4,99",
      imagemProduto: require("../assets/img/remedios/12.png"),
    },
    {
      id: 13,
      nomeProduto: "Relaxante Muscular Miorrelax 10 Comprimidos",
      descricao:
        "Relaxante Muscular Miorrelax 10 Comprimidos é utilizado para aliviar dores associadas a contraturas musculares, incluindo a dor de cabeça tensional.",
      preco: "R$ 4,99",
      imagemProduto: require("../assets/img/remedios/13.png"),
    },
    {
      id: 14,
      nomeProduto: "Glifage 850mg Merck S/A 30 Comprimidos",
      descricao:
        "Glifage 850mg Merck S/A 30 Comprimidos é indicado para tratar a diabetes tipo 2, associado a uma dieta alimentar.",
      preco: "R$ 29,99",
      imagemProduto: require("../assets/img/remedios/14.png"),
    },
    {
      id: 15,
      nomeProduto:
        "Insulina Tresiba Flextouch Novo Nordisk 1 Caneta Descartável 3ml",
      descricao:
        "Insulina Tresiba Flextouch Novo Nordisk 1 Caneta Descartável 3ml é indicada para tratar a diabetes mellitus, reduzindo o nível de açúcar no sangue.",
      preco: "R$ 148,00",
      imagemProduto: require("../assets/img/remedios/15.png"),
    },
    {
      id: 16,
      nomeProduto: "Fralda Descartável Pampers Supersec Pacotão M 30 Unidades",
      descricao:
        "Fralda Descartável Pampers é um produto de higiene íntima usado por bebês e crianças.",
      preco: "R$ 36,74",
      imagemProduto: require("../assets/img/remedios/16.png"),
    },
    {
      id: 17,
      nomeProduto: "Lenços Umedecidos Huggies Puro e Natural 48 Unidades",
      descricao:
        "Lenços Umedecidos Huggies Puro e Natural limpa de forma segura e ajuda a prevenir assaduras.",
      preco: "R$ 15,90",
      imagemProduto: require("../assets/img/remedios/17.png"),
    },
    {
      id: 18,
      nomeProduto:
        "Gel de Limpeza Facial La Roche-Posay Effaclar Concentrado 300g",
      descricao:
        "Gel de Limpeza Facial La Roche-Posay Effaclar limpa profundamente a pele, reduzindo a oleosidade e lesões acneicas.",
      preco: "R$ 79,90",
      imagemProduto: require("../assets/img/remedios/18.png"),
    },
    {
      id: 19,
      nomeProduto: "Hidratante Facial Neutrogena Hydro Boost Water Gel 50g",
      descricao:
        "Hidratante Facial Neutrogena combina uma exclusiva textura ultraleve gel não oleosa, de rápida absorção e refrescante.",
      preco: "R$ 87,69",
      imagemProduto: require("../assets/img/remedios/19.png"),
    },
    {
      id: 20,
      nomeProduto: "Dimorf 10mg Cristália 50 Comprimidos",
      descricao:
        "Dimorf 10mg (sulfato de morfina pentaidratado) atua sobre sistema nervoso central e outros órgãos do corpo proporcionando alívio para dores intensas e crônicas.",
      preco: "R$ 51,59",
      imagemProduto: require("../assets/img/remedios/20.png"),
    },
  ];

  const Remedio = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate("DetalheProduto")}
          // onPress={() => navigation.navigate('Remedio', { produto: item })}>
        >
          <Image style={styles.productImage} source={item.imagemProduto} />
          <Text style={styles.productNameValue}>{item.nomeProduto}</Text>
        </TouchableOpacity>
        <Text style={styles.productDescript}>{item.descricao}</Text>
        <Text style={styles.productNameValue}>{item.preco}</Text>

        <View style={styles.btnProductBuyArea}>
          <TouchableOpacity style={styles.btnBuyProduct}>
            <Text style={styles.btnTextBuyProduct}>Comprar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          contentContainerStyle={styles.flatListContent}
          data={DATA}
          renderItem={Remedio}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    maxWidth: (screenWidth - 40) / 2, // Ajusta a largura dos itens para caber em duas colunas
  },
  containerCard: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#F8F8F8",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    padding: 10,
    alignItems: "center",
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  productImage: {
    flex: 1,
    height: 100,
    width: 100,
    resizeMode: "contain",
    alignItems: "center"
  },
  productNameValue: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#333",
  },
  productDescript: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
  btnProductBuyArea: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  btnBuyProduct: {
    width: "80%",
    backgroundColor: "#118E96",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
  },
  btnTextBuyProduct: {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: "bold",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  safeArea: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  flatListContent: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default Produtos;
