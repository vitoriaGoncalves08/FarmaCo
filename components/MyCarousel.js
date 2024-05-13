import React, { useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Animated, Dimensions, Image } from 'react-native';


const MyCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: screenWidth } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
      >
        <View style={[styles.item, { width: screenWidth }]}>
            <Image style={styles.BannerImg} source={require('../assets/Entregas.png')} />
        </View>
        <View style={[styles.item, { width: screenWidth }]}>
            <Image style={styles.BannerImg} source={require('../assets/Entrega.png')} />
        </View>
        <View style={[styles.item, { width: screenWidth }]}>
            <Image style={styles.BannerImg} source={require('../assets/Dia de ofertas.png')} />
        </View>
        <View style={[styles.item, { width: screenWidth }]}>
            <Image style={styles.BannerImg} source={require('../assets/Oferta.png')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: Dimensions.get('window').width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BannerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },


});

export default MyCarousel;
