import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

import { useNavigation } from "@react-navigation/native";


const Catalogo  = () => {
  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>
        <View style = {styles.supNot}>
          <View style={styles.hiArea}>
            <Text style={styles.hiTxt}>Olá, usuário</Text>
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
          </View>
          <View style={styles.subBanner}>
          </View>
        </View>
        <View style={styles.rowTags}>
          <View style={styles.tagColumn}>
            <View style={styles.tag}>
              <TouchableOpacity style = {styles.tagIcon}>
                <Image style={styles.kartIcon} source={require('../assets/carrinho.png')} />
              </TouchableOpacity>
            </View>
            <Text style={styles.tagTxt}>Remédios</Text>
          </View>
          <View style={styles.tagColumn}>
            <View style={styles.tag}>
              <TouchableOpacity style = {styles.tagIcon}>
                <Image style={styles.kartIcon} source={require('../assets/carrinho.png')} />
              </TouchableOpacity>
            </View>
            <Text style={styles.tagTxt}>Beleza</Text>
          </View>
          <View style={styles.tagColumn}>
            <View style={styles.tag}>
              <TouchableOpacity style = {styles.tagIcon}>
                <Image style={styles.kartIcon} source={require('../assets/carrinho.png')} />
              </TouchableOpacity>
            </View>
            <Text style={styles.tagTxt}>Bebê</Text>
          </View>
          <View style={styles.tagColumn}>
            <View style={styles.tag}>
              <TouchableOpacity style = {styles.tagIcon}>
                <Image style={styles.kartIcon} source={require('../assets/carrinho.png')} />
              </TouchableOpacity>
            </View>
            <Text style={styles.tagTxt}>Higiene</Text>
          </View>
        </View>
        <View style = {styles.supNot}>
            <View style={styles.hiArea}>
              <Text style={styles.hiTxt}>Mega Ofertas</Text>
            </View>
            <View style = {styles.notArea}>
              <TouchableOpacity style = {styles.iconSup}>
                <Text>Saiba mais</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.prodRow}>
          <View style={styles.prodColumn}>
            <View style={styles.prodBox}>
            
            </View>
          </View>
          <View style={styles.prodColumn}>
            <View style={styles.prodBox}>
            
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
}

export default Catalogo;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: 'white',
    padding: 8
  },
  supNot: { 
    width: '95%',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignContent: 'flex-start',

  },
  hiArea: {
    width: '55%',
    alignContent: 'start',
    justifyContent: 'center',
  },
  hiTxt: {
    fontSize: 17,
  },
  notArea: {
    width: '45%',
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
    width: '95%',
    height: '50%',
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
    width: 18,
    height: 18,
    position: 'absolute',
    left:18,
    marginTop: -9,
  },
  txtinput: {
    width:'96%',
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
    width: '96%',
    height: '45%',
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    marginTop: 10,
  },
  subBanner: {
    width: '96%',
    height: '25%',
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    marginTop: 10,
  },
  rowTags: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagColumn: {
    width:'20%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,

  },
  tag: {
    width: '100%',
    height: '67%',
    margin: 4,
    marginBottom: 0,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  tagIcon: {
    width: 40, 
    height: 40,
    marginTop: 16,
    marginLeft: 16,
  },
  tagTxt: {
    marginTop: 10,
    fontSize: 14,
  },
  prodRow: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  prodColumn: {
    width: '45%',
    height: '100%',
    backgroundColor: 'blue',
    margin: 10,
    marginTop: 5,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  prodBox: {
    backgroundColor: '#FFFFF',
    width:'100%',
    height:'10%',
  }

})

