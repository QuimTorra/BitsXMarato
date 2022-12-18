import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

export default function Header() {
  return (
    <SafeAreaView style={styles.banner}>
      <Image
        source={require("../../../assets/LOGO.png")}
        style={{ width: 210, height: 80, marginTop: 2 }}
      />
    </SafeAreaView>
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
    marginBottom: 10,
  },
  logotext: {
    fontSize: 18,
    marginTop: 30,
  },
});
