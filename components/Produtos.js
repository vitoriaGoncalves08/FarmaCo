import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Produtos = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      "id": 1,
      "nome": "Nome do remédio",
      "descricao": "descrição do remédio",
      "imagem": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/portrait_medium.jpg"
    }
  ]

  const Remedio = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('DetalheProduto')}>
      <View style={styles.containerPersonagem}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.imagem,
          }}
        />
        <Text style={styles.paragraph}>{item.nome}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={Remedio}
        keyExtractor={item => item.id}
        horizontal={false}
      />
    </SafeAreaView>
  );
};
//   return (
//     <View style={styles.prodRow}>
//       <TouchableOpacity
//         style={styles.cardPress}
//         onPress={() => navigation.navigate('DetalheProduto')}
//       >
//         <View style={styles.prodBox}>
//           <View style={styles.discountArea}>
//             <Text style={styles.discountTxt}>-10%</Text>
//           </View>
//           <Image
//             style={styles.prodImage}
//             source={require('../assets/img/remedio.png')}
//           />
//           <View style={styles.infoProdArea}>
//             <Text style={styles.productName}>Diporrona Monohidratada</Text>
//             <Text style={styles.productDesc}>Remedio para dores</Text>
//             <Text style={styles.productValue}>R$15.00</Text>
//           </View>
//           <View style={styles.btnProductArea}>
//             <TouchableOpacity style={styles.btnProduct}>
//               <Text style={styles.btnProductTxt}>Comprar</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.cardPress}
//         onPress={() => navigation.navigate('DetalheProduto')}
//       >
//         <View style={styles.prodBox}>
//           <View style={styles.discountArea}>
//             <Text style={styles.discountTxt}>-10%</Text>
//           </View>
//           <Image
//             style={styles.prodImage}
//             source={require('../assets/img/remedio.png')}
//           />
//           <View style={styles.infoProdArea}>
//             <Text style={styles.productName}>Diporrona Monohidratada</Text>
//             <Text style={styles.productDesc}>Remedio para dores</Text>
//             <Text style={styles.productValue}>R$15.00</Text>
//           </View>
//           <View style={styles.btnProductArea}>
//             <TouchableOpacity style={styles.btnProduct}>
//               <Text style={styles.btnProductTxt}>Comprar</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    borderWidth: 1, 
    borderColor: 'red',
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020',
    padding: 2
  },
  containerPersonagem: {
    borderWidth: 1, 
    borderColor: 'green',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#202020',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    width: 200,
    height: 200
  },
  paragraph: {
    borderWidth: 1, 
    borderColor: 'orange',
    margin: 12,
    padding: 10,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#7F7F7F',
  },
  tinyLogo: {
    borderWidth: 1, 
    borderColor: 'pink',
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  // prodRow: {
  //   width: "100%",
  //   height: "200",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  // },
  // cardPress: {
  //   width: "43%",
  //   marginVertical: 7,
  //   marginHorizontal: 7,
  // },
  // prodBox: {
  //   backgroundColor: "white",
  //   width: "100%",
  //   height: 210,
  //   paddingHorizontal: 3,
  //   alignItems: "center",
  //   shadowColor: "black",
  //   borderRadius: 4,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowRadius: 5,
  //   shadowOpacity: 0.4,
  // },
  // discountArea: {
  //   width: "100%",
  //   height: "10%",
  //   justifyContent: "flex-end",
  //   alignItems: "flex-end",
  // },
  // discountTxt: {
  //   backgroundColor: "rgba(112, 149, 18, 0.2)",
  //   top: 5,
  //   marginTop: 2,
  //   borderRadius: 5,
  //   padding: 3,
  //   fontWeight: "bold",
  //   color: "#4D8811",
  // },
  // prodImage: {
  //   height: "55%",
  //   width: "55%",
  // },
  // infoProdArea: {
  //   width: "90%",
  // },
  // productName: {
  //   fontSize: 11,
  //   fontWeight: "bold",
  //   color: "#8A8888",
  // },
  // productDesc: {
  //   fontSize: 10,
  //   marginBottom: 7,
  //   color: "#8A8888",
  // },
  // productValue: {
  //   fontSize: 10,
  //   color: "#8A8888",
  // },
  // btnProductArea: {
  //   width: "90%",
  //   alignItems: "flex-end",
  // },
  // btnProduct: {
  //   width: "45%",
  //   height: "100%",
  //   backgroundColor: "#118E96",
  //   alignItems: "center",
  //   borderRadius: 2,
  // },
  // btnProductTxt: {
  //   fontSize: 10,
  //   color: "#F1F1F1",
  // },
});

export default Produtos;
