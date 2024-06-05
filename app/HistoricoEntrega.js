import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList
} from 'react-native';
import TabMenu from '../components/TabMenu';
import { AntDesign } from '@expo/vector-icons';

const entregaDATA = [
  {
    id: '1',
    status: 'Receita Enviada',
    descricao: [
      '1x Dipirona Sódica 500mg Genérico EMS 10 Comprimidos',
      '1x Ibuprofeno 600mg Genérico Prati Donaduzzi 20 Comprimidos',
      '2x Xarope Vick Guaifenesina 44E 120ml',
    ],
    numero: '#01',
  },
  {
    id: '2',
    status: 'Receita Enviada',
    descricao: [
      '1x Dimorf 10mg Cristália 50 Comprimidos',
    ],
    numero: '#02',
  },
];

const Entrega = ({ navigation }) => {
  const [validada, setValidada] = useState({});
  const [entregaData, setEntregaData] = useState(entregaDATA)

  const voltar = () => {
    navigation.navigate('Catalogo');
  };

  const handleValidarReceita = (id) => {
    setValidada((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    setEntregaData((prevState) =>
      prevState.map((item) => 
        item.id === id ? { ...item, status: 'Receita validada' } : item
      )
    );
  };

  const renderEntrega = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.numero}>{item.numero}</Text>
      </View>
      <View style={styles.cardBody}>
        {item.descricao.map((desc, index) => (
          <Text key={index} style={styles.descricao}>{desc}</Text>
        ))}
      </View>
      <View style={styles.validarArea}>
        <TouchableOpacity
          style={[
            styles.btnValidar,
            { backgroundColor: validada[item.id] ? 'gray' : '#118E96' }
          ]}
          onPress={() => handleValidarReceita(item.id)}
          disabled={validada[item.id]}
        >
          <Text style={styles.btnValidarTxt}>
            {validada[item.id] ? 'Receita Validada' : 'Validar Receita'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.voltar} onPress={() => voltar()}>
          <AntDesign name="arrowleft" size={24} color="#424141" />
        </TouchableOpacity>
        <Text style={styles.title}>Entrega</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.historicoTitle}>Histórico</Text>
        <FlatList 
          data={entregaDATA}
          renderItem={renderEntrega}
          keyExtractor={item => item.id}
        />
      </View>
      <TabMenu/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  header: {
    position: 'relative',
    marginTop: 15,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  voltar: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    left: 0,
    zIndex: 1,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#424141',
    textAlign: 'center',
    padding: 15,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  historicoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#424141',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: '700',
    color: '#118E96',
  },
  numero: {
    fontSize: 14,
    fontWeight: '700',
    color: '#118E96',
  },
  cardBody: {
    marginBottom: 10,
  },
  descricao: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  validarArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  btnValidar: {
    height: 35,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#118E96',
  },
  btnValidarTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Entrega;