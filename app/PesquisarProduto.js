import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Produto from '../components/Produtos';
import TabMenu from '../components/TabMenu';
import { useNavigation } from "@react-navigation/native";

const PesquisarProduto = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.supNot}>
            <View style={styles.hiArea}>
              <Text style={styles.hiTxt}>Olá, usuário</Text>
            </View>

            <View style={styles.notArea}>
              <TouchableOpacity
                style={styles.iconSup}
                onPress={() => navigation.navigate('Carrinho')}
              >
                <Image style={styles.kartIcon} source={require('../assets/img/carrinho.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconSup}>
                <Image style={styles.notIcon} source={require('../assets/img/notification.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputWithIcon}>
            <TouchableOpacity>
              <Image style={styles.searchBtn} source={require('../assets/img/Search.png')} />
            </TouchableOpacity>
            <TextInput
              style={styles.txtinput}
              placeholder="Busque seu produto"
              placeholderStyle={styles.placeholder}
            />
          </View>

          <View style={styles.filters}>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Com receita')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Com receita' && styles.selectedFilterText]}>
                Com receita
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Sem receita')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Sem receita' && styles.selectedFilterText]}>
                Sem receita
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Bebê')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Bebê' && styles.selectedFilterText]}>
                Bebê
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Beleza')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Beleza' && styles.selectedFilterText]}>
                Beleza
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Higiene')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Higiene' && styles.selectedFilterText]}>
                Higiene
              </Text>
            </TouchableOpacity>
          </View>

          <Produto />
        </ScrollView>
      </SafeAreaView>
      <TabMenu/>
      </>
  );
}

export default PesquisarProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  scrollContent: {
    alignItems: 'center',
    padding: 8,
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
  searchBtn: {
    width: 18,
    height: 18,
    position: 'absolute',
    left: 18,
    marginTop: -9,
  },
  txtinput: {
    width: '96%',
    backgroundColor: '#E3E3E3',
    height: 45,
    borderRadius: 10,
    paddingLeft: 50,
    borderWidth: 0,
    borderColor: '#CCCCCE',
    color: '#4F4F4F',
    marginBottom: 0,
    outline: 'none',
    placeholderTextColor: "#A7A7A7",
  },
  placeholder: {
    fontWeight: 'bold',
  },
  filters: {
    width: '90%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    alignItems: 'center',
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
});
