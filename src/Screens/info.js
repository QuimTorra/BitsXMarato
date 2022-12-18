import { StyleSheet, Text, View, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Formulari from "../Components/info/Formulari";
import { Appbar, SegmentedButtons } from "react-native-paper";
import Dieta from "../Components/info/Dieta";
import Rutina from "../Components/info/Rutina";

const Info = ({ navigation }) => {
  const [render, setRender] = React.useState(0);
  const [form, setForm] = React.useState(true);
  const [visual, setVisual] = React.useState("dieta");

  const height = React.useRef(0);
  const weight = React.useRef(0);
  const sexe = React.useRef("home");
  const handleClick = (h, w, s) => {
    height.current = h;
    weight.current = w;
    sexe.current = s;
    setRender(render + 1);
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
        <Appbar.Content title="Prevenció" />
        {/* <Appbar.Action icon={icon} onPress={() => formwork()} /> */}
      </Appbar.Header>
      <Formulari
        handleClick={handleClick}
        animation={"slideInDown"}
        height={height}
        weight={weight}
        sexe={sexe}
      />
      <SegmentedButtons
        value={visual}
        onValueChange={setVisual}
        buttons={[
          { value: "dieta", label: "Dieta", icon: "food-apple" },
          { value: "rutina", label: "Rutina", icon: "weight-lifter" },
        ]}
        style={{ margin: 10 }}
      />
      {visual == "dieta" && (
        <Dieta
          height={height.current}
          weight={weight.current}
          sexe={sexe.current}
        />
      )}
      {visual == "rutina" && (
        <Rutina
          height={height.current}
          weight={weight.current}
          sexe={sexe.current}
        />
      )}
    </>
  );
};

export default Info;

const styles = StyleSheet.create({});
