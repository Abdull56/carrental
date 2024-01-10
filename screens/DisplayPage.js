import React from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function DisplayPage({ navigation, route }) {
  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.header}>
        <Text style={styles.text}>Rentals</Text>
      </View>
      <View style={styles.border}>
        <Icon name="search" size={22} color="black" />
        <Text style={styles.searchtext}>Pick-up and Return locations</Text>
      </View>

      <View style={styles.borderContainer}>
        <View style={styles.secborder}></View>

        <View style={styles.secborder}></View>
      </View>

      <View style={styles.borderContainer}>
        <View style={styles.secborder}></View>

        <View style={styles.secborder}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainerontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchtext: {
    alignSelf: "center",
    fontSize: 18,
    paddingHorizontal: 13,
  },
  border: {
    backgroundColor: "#f5f5f5",
    borderRadius: 17,
    borderWidth: 1,
    padding: 16,
    paddingHorizontal: 17,
    margin: 10,
    flexBasis: 60,
    flexDirection: "row",
  },
  borderContainer: {
    flexDirection: "row",
  },
  secborder: {
    backgroundColor: "#f5f5f5",
    borderRadius: 17,
    borderWidth: 1,
    padding: 16,
    paddingHorizontal: 17,
    margin: 10,
    height: 70,
    width: 168,
    flexDirection: "row",
  },
});
