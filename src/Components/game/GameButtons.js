import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import Medals from "../game/Medals";
import { data1 } from "./datagame";
import { data2 } from "./datagame";
import { data3 } from "./datagame";

var one = false;
var two = false;
var three = false;

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
          one = true;
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
          two = true;
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
          three = true;
        }}
      >
        Mode Difícil
      </Button>
      <Medals one={one} two={two} three={three} />
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
