import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Formulari from "../Components/Formulari";
import { Appbar } from "react-native-paper";

const Info = ({ navigation }) => {
  let [form, setForm] = React.useState(false);
  let [icon, setIcon] = React.useState("chevron-down");

  let formulari = null;
  if (form) formulari = <Formulari />;

  let formwork = () => {
    setIcon(form ? "chevron-down" : "chevron-up");
    setForm(!form);
  };

  return (
    <>
      <Appbar.Header
        dark={false}
        mode={"center-aligned"}
        style={{ backgroundColor: "#FF675D" }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Informació" />
        <Appbar.Action icon={icon} onPress={() => formwork()} />
      </Appbar.Header>
      {formulari}
    </>
  );
};

export default Info;

const styles = StyleSheet.create({});
