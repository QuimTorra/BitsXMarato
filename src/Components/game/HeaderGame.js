import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";

export default function HeaderGame({ navigation }) {
  return (
    <View>
      <Appbar.Header dark={false} mode={"center-aligned"} style={styles.header}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
          style={{ alignSelf: "flex-start" }}
        />
        <Appbar.Content
          title={"Combatim contra la trombosi!"}
          color={"#FFFFFF"}
          titleStyle={{ fontSize: 25 }}
        />
        <Appbar.Content
          title={"Veiem de lo que ets capaç"}
          color={"#FFFFFF"}
          titleStyle={{ fontSize: 15 }}
        />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF675D",
    zIndex: 1,
    postion: "absolute",
    height: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
