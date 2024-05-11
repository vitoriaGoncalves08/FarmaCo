import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const Produtos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.prodRow}>
      <TouchableOpacity
        style={styles.cardPress}
        onPress={() => navigation.navigate("#")}
      >
        <View style={styles.prodBox}>
          <View style={styles.discountArea}>
            <Text style={styles.discountTxt}>-10%</Text>
          </View>
          <Image
            style={styles.prodImage}
            source={require('../assets/img/remedio.png')}
          />
          <View style={styles.infoProdArea}>
            <Text style={styles.productName}>Diporrona Monohidratada</Text>
            <Text style={styles.productDesc}>Remedio para dores</Text>
            <Text style={styles.productValue}>R$15.00</Text>
          </View>
          <View style={styles.btnProductArea}>
            <TouchableOpacity style={styles.btnProduct}>
              <Text style={styles.btnProductTxt}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardPress}
        onPress={() => navigation.navigate("#")}
      >
        <View style={styles.prodBox}>
          <View style={styles.discountArea}>
            <Text style={styles.discountTxt}>-10%</Text>
          </View>
          <Image
            style={styles.prodImage}
            source={require('../assets/img/remedio.png')}
          />
          <View style={styles.infoProdArea}>
            <Text style={styles.productName}>Diporrona Monohidratada</Text>
            <Text style={styles.productDesc}>Remedio para dores</Text>
            <Text style={styles.productValue}>R$15.00</Text>
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
};

const styles = StyleSheet.create({
  prodRow: {
    width: "100%",
    height: "200",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardPress: {
    width: "43%",
    marginVertical: 7,
    marginHorizontal: 7,
  },
  prodBox: {
    backgroundColor: "white",
    width: "100%",
    height: 210,
    paddingHorizontal: 3,
    alignItems: "center",
    shadowColor: "black",
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  discountArea: {
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  discountTxt: {
    backgroundColor: "rgba(112, 149, 18, 0.2)",
    top: 5,
    marginTop: 2,
    borderRadius: 5,
    padding: 3,
    fontWeight: "bold",
    color: "#4D8811",
  },
  prodImage: {
    height: "55%",
    width: "55%",
  },
  infoProdArea: {
    width: "90%",
  },
  productName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#8A8888",
  },
  productDesc: {
    fontSize: 10,
    marginBottom: 7,
    color: "#8A8888",
  },
  productValue: {
    fontSize: 10,
    color: "#8A8888",
  },
  btnProductArea: {
    width: "90%",
    alignItems: "flex-end",
  },
  btnProduct: {
    width: "45%",
    height: "100%",
    backgroundColor: "#118E96",
    alignItems: "center",
    borderRadius: 2,
  },
  btnProductTxt: {
    fontSize: 10,
    color: "#F1F1F1",
  },
});

export default Produtos;
