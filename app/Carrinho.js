import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Checkbox from 'expo-checkbox'; // Importação do Checkbox
import TabMenu from '../components/TabMenu';

const Carrinho = ({ navigation }) => {
  const [carrinho, setCarrinho] = useState([
    { id: 1, nome: 'Dipirona Monohi...', descricao: 'Remédio para dores', preco: 10.00, quantidade: 1 },
    { id: 2, nome: 'Dipirona Monohi...', descricao: 'Remédio para dores', preco: 15.00, quantidade: 1 },
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Carrinho</Text>
        </View>
        <View style={styles.todosCheckbox}>
          <Checkbox
            value={selecionadoTodos}
            onValueChange={toggleSelecionadoTodos}
            style={styles.checkbox}
          />
          <Text style={styles.selecionarTodosTexto}>Selecionar todos</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {carrinho.map(item => (
            <View key={item.id} style={styles.card}>
              <View style={styles.item}>
                <Checkbox
                  value={itensSelecionados.includes(item.id)}
                  onValueChange={() => toggleItemSelecionado(item.id)}
                  style={styles.checkbox}
                />
                <Image source={require('../assets/img/remedios/remedio.png')} style={styles.imagem} />
                <View style={styles.texto}>
                  <Text style={styles.titulo}>{item.nome}</Text>
                  <Text style={styles.descricao}>{item.descricao}</Text>
                  <Text style={styles.preco}>R$ {item.preco}</Text>
                </View>
                <View style={styles.botoesQuantidade}>
                  <TouchableOpacity style={styles.botaoMenos} onPress={() => diminuirQuantidade(item.id)}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>{item.quantidade}</Text>
                  <TouchableOpacity style={styles.botaoMais} onPress={() => aumentarQuantidade(item.id)}>
                    <Text style={{ color: '#118E96', margin: 0 }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.textos}>
            <Text style={styles.preco}>Subtotal:</Text>
            <Text style={styles.preco}>R$ {calcularSubtotal()}</Text>
          </View>
          <View style={styles.textos}>
            <Text style={styles.preco}>Frete:</Text>
            <Text style={styles.preco}>R$ 5.00</Text>
          </View>
          <View style={styles.textos}>
            <Text style={styles.title}>TOTAL:</Text>
            <Text style={styles.title}>R$ {calcularSubtotal() !== 0 ? calcularSubtotal() + 5 : "5.00"}</Text>
          </View>
          <TouchableOpacity style={styles.botaoPagamento}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <TabMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  scrollContainer: {
    paddingBottom: 150,
  },
  card: {
    shadowColor: "#424141",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 123,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    marginTop: 10,
    marginBottom: 35,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#424141'
  },
  imagem: {
    width: 60,
    height: 60,
    margin: 15,
  },
  textos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5
  },
  texto: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600'
  },
  descricao: {
    fontSize: 14,
  },
  botoesQuantidade: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botaoMenos: {
    borderWidth: 1,
    borderColor: '#A7A7A7',
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  botaoMais: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
    borderColor:'#118E96',
    backgroundColor: '#F1F1F1',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  checkbox: {
    marginRight: 10,
  },
  todosCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 20,
  },
  selecionarTodosTexto: {
    marginLeft: 10,
    color: '#A7A7A7',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#eee',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
