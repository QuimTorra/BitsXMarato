import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

import * as Animatable from "react-native-animatable";

export default function Menu({ navigation }) {
  return (
    <View>
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
        >
          Combatim la trombosi
        </Button>
      </Animatable.View>
      <Animatable.View animation="swing" duration={2000}>
        <Button
          icon="newspaper-variant-multiple"
          mode="elevated"
          style={styles.buttons}
          textColor="#FFFFFF"
          onPress={() => {
            navigation.navigate("Noticies");
          }}
        >
          Notícies
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
