import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View, ScrollView } from 'react-native';

const Carrinho = ({ navigation }) => {
  const [carrinho, setCarrinho] = useState([
    { id: 1, nome: 'Produto 1', preco: 9.99, quantidade: 1 },
    { id: 2, nome: 'Produto 2', preco: 19.99, quantidade: 1 },
  ]);
  const [selecionadoTodos, setSelecionadoTodos] = useState(false);
  const [itensSelecionados, setItensSelecionados] = useState([]);

  const toggleSelecionadoTodos = () => {
    if (!selecionadoTodos) {
      setItensSelecionados(carrinho.map(item => item.id));
    } else {
      setItensSelecionados([]);
    }
    setSelecionadoTodos(!selecionadoTodos);
  };

  const toggleItemSelecionado = (id) => {
    if (itensSelecionados.includes(id)) {
      setItensSelecionados(itensSelecionados.filter(itemId => itemId !== id));
    } else {
      setItensSelecionados([...itensSelecionados, id]);
    }
  };

  const aumentarQuantidade = (id) => {
    setCarrinho(carrinho.map(item => item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item));
  }

  const diminuirQuantidade = (id) => {
    setCarrinho(carrinho.map(item => item.id === id ? { ...item, quantidade: Math.max(1, item.quantidade - 1) } : item));
  }

  const calcularSubtotal = () => {
    return carrinho.reduce((total, item) => {
      if (itensSelecionados.includes(item.id)) {
        return total + (item.preco * item.quantidade);
      } else {
        return total;
      }
    }, 0);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Carrinho</Text>
      </View>
      <View style={styles.todoscheckbox}>
        <TouchableOpacity
          style={[styles.checkbox, selecionadoTodos ? styles.checkboxSelecionado : null]}
          onPress={toggleSelecionadoTodos}
        ></TouchableOpacity>
        <Text>Selecionar todos</Text>
      </View>
      <ScrollView>
        {carrinho.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.item}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  itensSelecionados.includes(item.id) ? styles.checkboxSelecionado : null
                ]}
                onPress={() => toggleItemSelecionado(item.id)}
              ></TouchableOpacity>
              <Image source={require('../assets/img/carrinho.png')} style={styles.imagem} />
              <View style={styles.textos}>
                <Text style={styles.titulo}>{item.nome}</Text>
                <Text style={styles.preco}>R$ {item.preco}</Text>
              </View>
              <View style={styles.botoesQuantidade}>
                <TouchableOpacity style={styles.botaoMenos} onPress={() => diminuirQuantidade(item.id)}><Text>-</Text></TouchableOpacity>
                <Text>{item.quantidade}</Text>
                <TouchableOpacity style={styles.botaoMais} onPress={() => aumentarQuantidade(item.id)}><Text>+</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text>Subtotal: R$ {calcularSubtotal()}</Text>
        <Text>Frete: R$ 5,00</Text>
        <TouchableOpacity style={styles.botaoPagamento}><Text style={styles.buttonText}>Continuar</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  rtnbtn: {
    width: 20,
    height: 20,
    marginBottom: 15,
    marginLeft: 10,
  },
  todoscheckbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 20
  },
  checkboxSelecionado: {
    backgroundColor: '#000', // Cor quando selecionado
  },
  header: {
    marginTop: 10,
    marginBottom: 35,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textos: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: '#888',
  },
  botoesQuantidade: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botaoMenos: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },
  botaoMais: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
  },
  footer: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 70,
  },
  botaoPagamento: {
    width: '95%',
    height: 45,
    borderRadius: 20,
    backgroundColor: '#118E96',
    justifyContent: 'center',
    margin: 10,
    color: '#fff',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Carrinho;
