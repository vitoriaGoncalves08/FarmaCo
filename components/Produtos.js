import React from "react";
import { View, StyleSheet } from "react-native";

const ExemploFlexbox = () => {
  return (
      <View style={styles.flexContainer}>
        <View style={[styles.box, { backgroundColor: "red" }]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
        <View style={[styles.box, { backgroundColor: "blue" }]} />
        <View style={[styles.box, { backgroundColor: "yellow" }]} />
        <View style={[styles.box, { backgroundColor: "orange" }]} />
        <View style={[styles.box, { backgroundColor: "purple" }]} />
      </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    borderWidth: 1, 
    borderColor: 'red',
    width: '90%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 15,
  },
  box: {
    width: 200,
    height: 200,
    margin: 10,
  },
});

export default ExemploFlexbox;
