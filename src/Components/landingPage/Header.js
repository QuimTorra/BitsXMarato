import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

import * as Animatable from "react-native-animatable";

export default function Header() {
  return (
    <Animatable.View
      animation="bounceInDown"
      duration={1000}
      style={styles.banner}
    >
      <Text style={styles.logotext}>AQUI ANIRA EL LOGO</Text>
    </Animatable.View>
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
