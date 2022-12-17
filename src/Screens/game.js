import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import HeaderGame from "../Components/game/header";

export default function Game({ navigation }) {
  return (
    <View>
      <HeaderGame navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
