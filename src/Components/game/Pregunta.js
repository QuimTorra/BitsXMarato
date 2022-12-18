import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Pregunta({ data }) {
  return (
    <View style={styles.question}>
      <Text style={styles.txt}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    height: 200,
    width: 300,
    backgroundColor: "#FF675D",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 100,
    flexDirection: "column",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    alignSelf: "center",
  },
});
