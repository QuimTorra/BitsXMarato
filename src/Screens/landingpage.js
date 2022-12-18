import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "../Components/landingPage/Header.js";
import Menu from "../Components/landingPage/Menu.js";

export default function Landingpage({ navigation }) {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  open = () => {
    let url = "http://www.wikipedia.org";
    Linking.openURL(url);
  };

  return (
    <View style={{ height: "100%" }}>
      <Header />
      <Menu navigation={navigation} />
      <Appbar style={[styles.bottom]} safeAreaInsets={{ bottom }}>
        <Text style={{ color: "white" }}>En col·laboració amb</Text>
        <Image
          source={require("../../assets/logo-marato.png")}
          style={{ width: 200, height: 40, marginHorizontal: 8 }}
        />
      </Appbar>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#FF675D",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
  },
});
