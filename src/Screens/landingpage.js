import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../Components/landingPage/Header.js";
import Menu from "../Components/landingPage/Menu.js";

export default function Landingpage({ navigation }) {
  return (
    <View>
      <Header />
      <Menu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
