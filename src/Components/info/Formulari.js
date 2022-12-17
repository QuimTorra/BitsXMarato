import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { AsyncStorage, StyleSheet, View, Text } from "react-native";
import { TextInput, ToggleButton } from "react-native-paper";
import * as Animatable from "react-native-animatable";

export default function Formulari(props) {
  const storeForm = async () => {
    try {
      await AsyncStorage.setItem(
        "form",
        JSON.stringify({ sexe: sexe, height: height, weight: weight })
      );
    } catch (err) {}
  };

  const retrieveForm = async () => {
    try {
      const value = await AsyncStorage.getItem("form");
      if (!(value !== null)) {
        return null;
      }
      return JSON.parse(value);
    } catch (err) {}
  };

  const weight = 15;
  const height = 15;
  const [sexe, setSexe] = React.useState("home");

  let val = retrieveForm();
  if (val !== null) {
    console.log(val);
  }

  return (
    <Animatable.View style={styles.form} animation="slideInDown">
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ToggleButton.Row onValueChange={(val) => setSexe(val)} value={sexe}>
          <ToggleButton icon="gender-male" value="home" />
          <ToggleButton icon="gender-female" value="dona" />
        </ToggleButton.Row>
        <TextInput
          style={styles.input}
          value={height}
          placeholder="Alçada"
          maxLength={3}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={weight}
          placeholder="Pes"
          maxLength={3}
          keyboardType="numeric"
        />
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FF675D",
    display: "flex",
    borderTopColor: "#DD453B",
    borderTopWidth: 2,
    zIndex: -300,
  },
  input: {
    width: 100,
    height: 40,
    margin: 12,
    backgroundColor: "white",
  },
  container: {
    margin: 10,
  },
});
