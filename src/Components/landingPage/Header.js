import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Button} from "react-native-paper";

export default function Header() {
    return (
    <View style = {styles.banner}>
      <Text>AQUI ANIRA EL LOGO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    banner: {
        flex: 1,
        display: "flex",
        width: "100%",
        height: "30%",
        backgroundColor: "#FF675D"
    },
});