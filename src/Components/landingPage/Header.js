import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Header() {
  return (
    <View style={styles.banner}>
      <Text style={styles.logotext}>AQUI ANIRA EL LOGO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    display: "flex",
    width: "100%",
    height: 120,
    backgroundColor: "#FF675D",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 60,
  },
  logotext: {
    fontSize: 18,
    marginTop: 30,
  },
});
