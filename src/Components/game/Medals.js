import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function Medals() {
  const [gold, setGold] = useState(false);
  const [silver, setSilver] = useState(false);
  const [bronze, setBronze] = useState(false);

  return (
    <View style={styles.struct}>
      <IconButton
        icon="medal"
        size={40}
        iconColor={bronze ? "#D89402" : "#5A5958"}
      />
      <IconButton
        icon="medal"
        size={40}
        iconColor={silver ? "#ABABAB" : "#5A5958"}
      />
      <IconButton
        icon="medal"
        size={40}
        iconColor={gold ? "#FFE92C" : "#5A5958"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  struct: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
