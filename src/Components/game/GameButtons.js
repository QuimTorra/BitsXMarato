import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import Medals from "../game/Medals";
import { data1 } from "./datagame";
import { data2 } from "./datagame";
import { data3 } from "./datagame";

// var one = false;
// var two = false;
// var three = false;

export default function GameButtons({ navigation }) {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  return (
    <View style={styles.struct}>
      <Button
        icon="book"
        mode="elevated"
        textColor="#FFFFFF"
        style={styles.buttons}
        onPress={() => {
          //one = true;
          setOne(true);
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
          //two = true;
          setTwo(true);
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
          //three = true;
          setThree(true);
          navigation.navigate("Level", { data: data3 });
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
