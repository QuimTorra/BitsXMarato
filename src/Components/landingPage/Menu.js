import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Menu() {
  return (
    <View style={styles.struct}>
      <Button icon="wechat" mode="elevated" style={styles.buttons}></Button>
      <Button
        icon="weight-lifter"
        mode="elevated"
        style={styles.buttons}
      ></Button>
      <Button icon="wechat" mode="elevated" style={styles.buttons}></Button>
      <Button icon="wechat" mode="elevated" style={styles.buttons}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: 200,
    height: 40,
    backgroundColor: "#FF675D",
    alignSelf: "center",
  },
  struct: {
    display: "flex",
    justifyContent: "space-around",
  },
});
