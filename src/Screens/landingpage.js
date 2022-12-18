import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "../Components/landingPage/Header.js";
import Menu from "../Components/landingPage/Menu.js";

export default function Landingpage({ navigation }) {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  open = () => {
    let url = "https://activatt.com/donations/activatt-donacion-persona-fisica";
    Linking.openURL(url);
  };

  return (
    <View style={{ height: "100%" }}>
      <Header />
      <Menu navigation={navigation} />
      <Appbar style={[styles.bottom]} safeAreaInsets={{ bottom }}>
        <Text style={{ color: "white" }}>Col·labora fent un donatiu a</Text>
        <TouchableOpacity onPress={() => open()}>
          <Image
            source={require("../../assets/logo-activat.png")}
            style={{ width: 165, height: 50, marginHorizontal: 8 }}
          />
        </TouchableOpacity>
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
