import { StyleSheet, Text, View, TextInput } from "react-native";
import * as React from "react";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Formulari from "../Components/info/Formulari";
import { Appbar } from "react-native-paper";

const Info = ({ navigation }) => {
  let [form, setForm] = React.useState(false);
  let [icon, setIcon] = React.useState("chevron-down");

  const formref = useRef();

  let formwork = () => {
    setIcon(form ? "chevron-down" : "check");
    setForm(!form);
  };

  let a = [];
  a.sort();

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
      {form && <Formulari animation="slideInDown" ref={formref} />}
    </>
  );
};

export default Info;

const styles = StyleSheet.create({});
