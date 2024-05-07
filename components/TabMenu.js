import React, { children } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Inicial from '../app/Inicial';
import Cadastro from '../app/Cadastro';
import Login from '../app/Login';
import Splash from '../app/Splash';
import Catalogo from '../app/Catalogo';
import Log from '../app/Log';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

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
)

export const TabMenu = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar
            }}
            tabBarOptions={{ showLabel: false }}>

            <Tab.Screen name='Login' component={Login}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Image
                                source={require('../assets/img/home.png')}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? '#118E96' : '#424141' }}
                            /> */}
                            <MaterialCommunityIcons name="home" size={29} color={focused ? '#118E96' : '#424141'} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Splash' component={Splash}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome name="search" size={24} color={focused ? '#118E96' : '#424141'} />
                        </View>
                    )
                }} />

            {user.nome === 'admin' && user.senha === 123 ? (
                <>
                    <Tab.Screen name='Cadastro' component={Cadastro}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesome5 name="plus" size={24} color="#fff" />
                                </View>
                            ),
                            tabBarButton: (props) => (
                                <CustomTabMenuBottom {...props} />
                            )
                        }}
                    />
                    <Tab.Screen name='Log' component={Log}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <MaterialIcons name="dashboard" size={24} color={focused ? '#118E96' : '#424141'} />
                                </View>
                            )
                        }} />
                </>
            ) : (
                <Tab.Screen name='Catalogo' component={Catalogo}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="shopping-cart" size={22} color={focused ? '#118E96' : '#424141'} />
                            </View>
                        )
                    }} />

            )}

            <Tab.Screen name='Inicial' component={Inicial}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="person" size={24} color={focused ? '#118E96' : '#424141'} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        border: 'none',
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#F1F1F1',
        borderRadius: 20,
        height: 60,
        marginBottom: 10,
        shadowColor: '#424141',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        elevation: 10,
    },
});
