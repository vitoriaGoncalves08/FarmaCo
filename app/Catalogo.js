import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MyCarousel from '../components/MyCarousel';

import { useNavigation } from "@react-navigation/native";

const Catalogo  = () => {
  const navigation = useNavigation();

  return(
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style = {styles.supNot}>
          <View style={styles.hiArea}>
            <Text style={styles.hiTxt}>Ola, usuário</Text>
          </View>
          <View style = {styles.notArea}>
            <TouchableOpacity style = {styles.iconSup}>
              <Image style={styles.kartIcon} source={require('../assets/carrinho.png')} />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.iconSup}>
              <Image style={styles.notIcon} source={require('../assets/notification.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.columnBanner}>
          <View style={styles.inputWithIcon}>
            <TouchableOpacity>
              <Image style={styles.searchBtn} source={require('../assets/Search.png')} />
            </TouchableOpacity>
            <TextInput
              style={styles.txtinput}
              placeholder="Busque seu produto"
              placeholderStyle = {styles.placeholder}
            />
          </View>
          <View style={styles.banner}>
            <MyCarousel/>
          </View>
          <View style={styles.subBanner}>
            <Image style={styles.subBannerImg} source={require('../assets/subbanner.png')} />
          </View>
        </View>
        <View style={styles.rowTags}>
          <View style={styles.tagColumn}>
            <View style={styles.tag}>
              <TouchableOpacity style = {styles.tagIcon}>
                <MaterialCommunityIcons style={styles.remedioIcon} name="pill" size={40} color="#118E96" />
              </TouchableOpacity>
            </View>
            <Text style={styles.tagTxt}>Remédios</Text>
          </View>
          <View style={styles.tagColumn}>
            <View style={styles.tag}>
              <TouchableOpacity style = {styles.tagIcon}>
                <MaterialCommunityIcons style={styles.belezaIcon}  name="lipstick" size={40} color="#118E96" />
              </TouchableOpacity>
            </View>
            <Text style={styles.tagTxt}>Beleza</Text>
          </View>
          <View style={styles.tagColumn}>
            <View style={styles.tag}>
              <TouchableOpacity style = {styles.tagIcon}>
                <MaterialCommunityIcons style={styles.bebeIcon} name="baby-carriage" size={40} color="#118E96" />
              </TouchableOpacity>
            </View>
            <Text style={styles.tagTxt}>Bebê</Text>
          </View>
          <View style={styles.tagColumn}>
            <View style={styles.tag}>
              <TouchableOpacity style = {styles.tagIcon}>
                <MaterialCommunityIcons style={styles.higieneIconIcon} name="shower-head" size={40} color="#118E96" />
              </TouchableOpacity>
            </View>
            <Text style={styles.tagTxt}>Higiene</Text>
          </View>
        </View>
        <View style={styles.catalogArea}>
          <View style = {styles.prodSection}>
            <View style={styles.ofertaArea}>
              <Text style={styles.ProdSectionTitle}>Mega Ofertas</Text>
            </View>
            <View style = {styles.moreArea}>
              <TouchableOpacity style = {styles.iconSup}>
                <Text style = {styles.moreTxt}>Saiba mais</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.prodRow}>
          <TouchableOpacity style={styles.cardPress} onPress={() => navigation.navigate('Catalogo')}>
              <View style={styles.prodBox}>
                <View style={styles.discountArea}>
                    <Text style={styles.discountTxt}>-10%</Text>
                </View>
                <Image style={styles.prodImage} source={require('../assets/remedio.png')} />
                <View style={styles.infoProdArea}>
                  <Text style={styles.productName}>Diporrona  Monohidratada</Text>
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
            <TouchableOpacity style={styles.cardPress} onPress={() => navigation.navigate('Catalogo')}>
              <View style={styles.prodBox}>
                <View style={styles.discountArea}>
                    <Text style={styles.discountTxt}>-10%</Text>
                </View>
                <Image style={styles.prodImage} source={require('../assets/remedio.png')} />
                <View style={styles.infoProdArea}>
                  <Text style={styles.productName}>Diporrona  Monohidratada</Text>
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
            <TouchableOpacity style={styles.cardPress} onPress={() => navigation.navigate('Catalogo')}>
              <View style={styles.prodBox}>
                <View style={styles.discountArea}>
                    <Text style={styles.discountTxt}>-10%</Text>
                </View>
                <Image style={styles.prodImage} source={require('../assets/remedio.png')} />
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
            <TouchableOpacity style={styles.cardPress} onPress={() => navigation.navigate('Catalogo')}>
              <View style={styles.prodBox}>
                <View style={styles.discountArea}>
                    <Text style={styles.discountTxt}>-10%</Text>
                </View>
                <Image style={styles.prodImage} source={require('../assets/remedio.png')} />
                <View style={styles.infoProdArea}>
                  <Text style={styles.productName}>Diporrona  Monohidratada</Text>
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
        </View>
      </ScrollView>
  );
}

export default Catalogo;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    width: '100%',  
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1'
  },
  supNot: { 
    width: '100%',
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20  ,
    flexDirection: 'row',
    alignContent: 'flex-start',

  },
  hiArea: {
    width: '55%',
    alignContent: 'start',
    justifyContent: 'center',
  },
  hiTxt: {
    fontSize: 18,
  },
  notArea: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  iconSup: {
    marginRight: 14,
  },
  kartIcon: {
    width: 25, 
    height: 25,
  },
  notIcon: {
    width: 25, 
    height: 25,
  },
  columnBanner: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWithIcon: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  searchBtn:{
    width: 20,
    height: 20,
    position: 'absolute',
    left:16,
    marginTop: -9,
    zIndex: 1,
  },
  txtinput: {
    width:'94%',
    backgroundColor: '#E3E3E3',
    height: 45,
    borderRadius: 10,
    paddingLeft: 50,
    borderWidth: 0,
    borderColor: '#CCCCCE',
    color: '#4F4F4F',
    marginBottom: 0,
    outline: 'none',
    placeholderTextColor: "#A7A7A7" 
  },
  placeholder:{
    fontWeight: 'bold',
  },
  banner: {
    width: '94%',
    height: '50%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    marginTop: 10,
  },
  subBanner: {
    width: '94%',
    height: '30%',
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    marginTop: 10,
  },
  subBannerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,  
  },
  rowTags: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagColumn: {
    width:'17%',
    height:'50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,

  },
  tag: {
    width: '100%',
    height: '100%',
    margin: 4,
    marginBottom: 0,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  remedioIcon: {
    width: 40, 
    height: 40,

  },
  belezaIcon: {
    width: 40, 
    height: 40,

  },
  bebeIcon: {
    width: 40, 
    height: 40,

  },
  higieneIcon: {
    width: 40, 
    height: 40,

  },
  tagTxt: {
    marginTop: 7,
    fontSize: 16,
  },
  prodSection: {
      width: '100%',
      marginTop: 5,
      marginBottom:0,
      padding: 10,
      flexDirection: 'row',
      alignContent: 'flex-start',
  
    },
  ofertaArea: {
      width: '55%', 
      alignContent: 'start',
      justifyContent: 'center',
    },
  ProdSectionTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10,
  },
  moreArea: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 

  },
  moreTxt: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#A7A7A7',
    marginLeft: 10,
  },
  catalogArea: {
    width: '100%',
    alignContent: 'center',
  },
  prodRow: {
    width: '100%',
    height: '200',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  cardPress: {
    width:'43%',
    marginVertical:7,
    marginHorizontal: 7,
  },
  prodBox: {
    backgroundColor: 'white',
    width:'100%',
    height: 'auto',
    minHeight: 210,
    paddingHorizontal: 3,
    alignItems: 'center',
    shadowColor:'black',
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2  
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  discountArea: {
    width:'100%',
    height: '10%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  discountTxt: {
    backgroundColor: 'rgba(112, 149, 18, 0.2)',
    top: 5,
    marginTop:2,
    borderRadius:5,
    padding: 3,
    fontWeight: 'bold',
    color: '#4D8811',
  
  },
  prodImage: {
    height: '55%',
    width: '55%'
  },
  infoProdArea: {
    width: '90%'
  },
  productName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#8A8888'
  },
  productDesc: {
    fontSize: 10,
    marginBottom: 7,
    color: '#8A8888'
  },
  productValue: {
    fontSize: 10,
    color: '#8A8888'
  },
  btnProductArea: {
    width: '90%',
    alignItems: 'flex-end',
  },
  btnProduct: {
    width: '45%',
    height: '100%',
    backgroundColor: '#118E96',
    alignItems: 'center',
    borderRadius: 2,
  },
  btnProductTxt: {
    fontSize: 10,
    color: '#F1F1F1',
  }
})