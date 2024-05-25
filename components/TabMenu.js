import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const user = { nome: 'admin', senha: 1234 };

const CustomTabMenuBottom = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View style={{ width: 55, height: 55, borderRadius: 35, backgroundColor: '#118E96' }}>{children}</View>
    </TouchableOpacity>
);

const TabMenu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.tabBar}>
            <TouchableOpacity
                style={styles.tabItem}
                onPress={() => {
                    navigation.navigate('Catalogo');
                }}
            >
                <MaterialCommunityIcons
                    name="home"
                    size={29}
                    color={'#424141'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabItem}
                onPress={() => {
                    navigation.navigate('PesquisarProduto');
                }}
            >
                <FontAwesome
                    name="search"
                    size={24}
                    color={'#424141'}
                />
            </TouchableOpacity>
            {user.nome === 'admin' && user.senha === 123 ? (
                <>
                    <CustomTabMenuBottom onPress={() => navigation.navigate('Cadastro')}>
                        <FontAwesome5 name="plus" size={24} color="#fff" />
                    </CustomTabMenuBottom>
                    <TouchableOpacity
                        style={styles.tabItem}
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                    >
                        <MaterialIcons
                            name="dashboard"
                            size={24}
                            color={'#424141'}
                        />
                    </TouchableOpacity>
                </>
            ) : (
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => {
                        navigation.navigate('Carrinho');
                    }}
                >
                    <FontAwesome5
                        name="shopping-cart"
                        size={22}
                        color={'#424141'}
                    />
                </TouchableOpacity>
            )}
            <TouchableOpacity
                style={styles.tabItem}
                onPress={() => {
                    navigation.navigate('Cadastro');
                }}
            >
                <Ionicons
                    name="person"
                    size={24}
                    color={'#424141'}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#F1F1F1',
        borderRadius: 20,
        margin: 10,
        shadowColor: '#424141',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        elevation: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: 12,
        color: '#424141',
    },
});

export default TabMenu;
