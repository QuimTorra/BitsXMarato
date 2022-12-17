import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import Noticies from "../Noticies";

export default function Menu({ navigation }) {
  return (
    <View>
      <View>
        <Noticies />
      </View>
      <Animatable.View animation="swing" duration={2000}>
        <Button
          icon="wechat"
          mode="elevated"
          textColor="#FFFFFF"
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("Chatbot");
          }}
        >
          Chatbot
        </Button>
      </Animatable.View>
      <Animatable.View animation="swing" duration={2000}>
        <Button
          icon="weight-lifter"
          mode="elevated"
          textColor="#FFFFFF"
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("Info");
          }}
        >
          Generador de Salut
        </Button>
      </Animatable.View>
      <Animatable.View animation="swing" duration={2000}>
        <Button
          icon="fencing"
          mode="elevated"
          textColor="#FFFFFF"
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("Game");
          }}
        >
          Combatim la trombosi
        </Button>
      </Animatable.View>
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
});
