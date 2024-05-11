import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View, ScrollView, CheckBox } from 'react-native';

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
           <CheckBox
              value={selecionadoTodos}
              onValueChange={toggleSelecionadoTodos}
              style={[styles.checkbox, selecionadoTodos]}
            />
        <Text style={{marginLeft: 10}}>Selecionar todos</Text>
      </View>
      <ScrollView>
        {carrinho.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.item}>
               <CheckBox
                value={itensSelecionados.includes(item.id)}
                onValueChange={() => toggleItemSelecionado(item.id)}
                style={[styles.checkbox, itensSelecionados.includes(item.id) ? styles.checkboxSelecionado : null]}
                />
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
          <Text style={styles.title}>R$ {calcularSubtotal() != 0 ? calcularSubtotal() + 5 : "5.00"}</Text>
        </View>
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
  todoscheckbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10
  },
  checkbox: {
    width: 22,
    height: 23,
    borderRadius: 10,
  },
  rtnbtn: {
    width: 20,
    height: 20,
    marginBottom: 15,
    marginLeft: 10,
  },
  header: {
    marginTop: 10,
    marginBottom: 35,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: '#424141'
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textos: {
    flex: 1,
    flexDirection: 'row',
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
    marginBottom: 85,
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
