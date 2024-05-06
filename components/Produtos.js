import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Produto = ({ nome, onPress }) => {
  return (
    <TouchableOpacity style={styles.produto} onPress={onPress}>
      <Text style={styles.nome}>{nome}</Text>
    </TouchableOpacity>
  );
}

const Produtos = () => {
  const navigation = useNavigation();

  const produtos = [
    { id: 1, nome: 'Produto 1'},
    { id: 2, nome: 'Produto 2'},
    { id: 3, nome: 'Produto 3'},
    // Adicione mais produtos conforme necessário
  ];

  return (
    <View style={styles.prodRow}>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          nome={produto.nome}
          imagem={produto.imagem}
          onPress={() => navigation.navigate('DetalhesProduto', { produtoId: produto.id })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  prodRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  produto: {
    width: '45%',
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imagem: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  nome: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Produtos;
