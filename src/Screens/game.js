import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";

import HeaderGame from "../Components/game/HeaderGame";
import GameButtons from "../Components/game/GameButtons";

export default function Game({ navigation }) {
  return (
    <View style={{ flexDirection: "column", justifyContent: "space-around" }}>
      <HeaderGame navigation={navigation} />
      <LottieView
        source={require("../../assets/animations/64201-action-sword.json")}
        autoPlay
        style={{
          width: 500,
          height: 500,
          alignSelf: "center",
          position: "absolute",
          justifyContent: "flex-start",
        }}
      />
      <Animatable.View animation="fadeIn" duration={2000}>
        <GameButtons navigation={navigation} />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({});
