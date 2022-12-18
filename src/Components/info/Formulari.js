import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, ToggleButton, IconButton } from "react-native-paper";
import * as Animatable from "react-native-animatable";

export default function Formulari({ handleClick, ...props }) {
  let weight = React.useRef(props.weight);
  let height = React.useRef(props.height);
  const [sexe, setSexe] = React.useState(props.sexe);

  const completeForm = () => {
    handleClick(weight.current, height.current, sexe);
  };

  return (
    <Animatable.View
      style={[styles.form, props.style]}
      animation={props.animation}
      easing="ease-out"
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 15,
          marginVertical: 1,
          justifyContent: "space-evenly",
        }}
      >
        <ToggleButton.Row onValueChange={(val) => setSexe(val)} value={sexe}>
          <ToggleButton icon="gender-male" value="home" />
          <ToggleButton icon="gender-female" value="dona" />
        </ToggleButton.Row>
        <TextInput
          onChangeText={(val) => (height.current = val)}
          style={styles.input}
          value={height.current}
          label="Alçada"
          maxLength={3}
          keyboardType="numeric"
          dense
        />
        <TextInput
          onChangeText={(val) => (weight.current = val)}
          style={styles.input}
          value={weight.current}
          label="Pes"
          maxLength={3}
          keyboardType="numeric"
          dense
        />
        <IconButton
          icon="check"
          mode="contained"
          onPress={() => completeForm()}
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
    margin: 12,
    backgroundColor: "white",
  },
  container: {
    margin: 10,
  },
});
