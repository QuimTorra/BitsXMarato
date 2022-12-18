import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { data1 } from "./datagame";
import { data2 } from "./datagame";
import { data3 } from "./datagame";

export default function GameButtons({ navigation }) {
  return (
    <View style={styles.struct}>
      <Button
        icon="book"
        mode="elevated"
        textColor="#FFFFFF"
        style={styles.buttons}
        onPress={() => {
          navigation.navigate("Level", { data: data1 });
        }}
      >
        Mode Principiant
      </Button>
      <Button
        icon="fire"
        mode="elevated"
        textColor="#FFFFFF"
        style={styles.buttons}
        onPress={() => {
          navigation.navigate("Level", { data: data2 });
        }}
      >
        Mode Intermig
      </Button>
      <Button
        icon="skull"
        mode="elevated"
        textColor="#FFFFFF"
        style={styles.buttons}
        onPress={() => {
          navigation.navigate("Level", { data: data3 });
        }}
      >
        Mode Difícil
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: 200,
    height: 40,
    backgroundColor: "#FF675D",
    alignSelf: "center",
    marginVertical: 20,
  },
  struct: {
    marginTop: 250,
  },
});
