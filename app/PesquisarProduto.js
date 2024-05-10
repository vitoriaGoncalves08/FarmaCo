import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Produto from '../components/Produtos';

import { useNavigation } from "@react-navigation/native";


const PesquisarProduto  = () => {
  const navigation = useNavigation();

  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
  };

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

        <View style={styles.filters}>
          <TouchableOpacity
            style={selectedFilter === 'Com receita'}
            onPress={() => handleFilterPress('Com receita')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Com receita' && styles.selectedFilterText]}>
              Com receita
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedFilter === 'Sem receita'}
            onPress={() => handleFilterPress('Sem receita')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Sem receita' && styles.selectedFilterText]}>
              Sem receita
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedFilter === 'Bebê'}
            onPress={() => handleFilterPress('Bebê')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Bebê' && styles.selectedFilterText]}>
              Bebê
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedFilter === 'Beleza'}
            onPress={() => handleFilterPress('Beleza')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Beleza' && styles.selectedFilterText]}>
              Beleza
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedFilter === 'Higiene'}
            onPress={() => handleFilterPress('Higiene')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Higiene' && styles.selectedFilterText]}>
              Higiene
            </Text>
          </TouchableOpacity>
        </View>     

        <Produto />
        <Produto />
        <Produto />

    </SafeAreaView>
  );
}

export default PesquisarProduto;

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
  inputWithIcon: {
    width: '95%',
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
  filters:{
    width:'90%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filterText: {
    fontSize: 17,
    color: 'black',
    textDecorationLine: 'none',
  },
  selectedFilterText: {
    color: '#118E96',
    textDecorationLine: 'underline',
  },
})