import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, SegmentedButtons, Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";

export default function Formulari(props) {
  let edat = 0;
  const [value, setValue] = React.useState("first");

  return (
    <Animatable.View style={styles.form} animation="slideInDown">
      <TextInput
        label="Edat"
        keyboardType="numeric"
        mode="outlined"
        style={{ width: "50%" }}
      />
      <SegmentedButtons
        style={styles.container}
        value={value}
        onValueChange={setValue}
        buttons={[
          { value: "walk", label: "walking", icon: "dumbbell" },
          { value: "train", label: "transit" },
          { value: "drive", label: "driving" },
        ]}
      />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FF675D",
    display: "flex",
    alignItems: "center",
    borderTopColor: "#DD453B",
    borderTopWidth: 2,
    zIndex: -300,
  },
  container: {
    margin: 10,
  },
});
