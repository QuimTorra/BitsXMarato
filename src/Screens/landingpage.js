import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";

import Header from "../Components/landingPage/Header.js";
import Menu from "../Components/landingPage/Menu.js";

export default function Landingpage({ navigation }) {
  open = () => {
    let url = "http://www.wikipedia.org";
    Linking.openURL(url);
  };

  return (
    <View>
      <Header />
      <Menu navigation={navigation} />
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.open}>
          <View style={styles.viewForText}>
            <Text> donació </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
