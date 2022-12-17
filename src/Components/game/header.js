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
        />
        <Appbar.Content title="Combatim la trombosi!" />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF675D",
    zIndex: 1,
    postion: "absolute",
  },
});
