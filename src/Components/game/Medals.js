import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function Medals({ one, two, three }) {
  return (
    <View style={styles.struct}>
      <IconButton
        icon="medal"
        size={40}
        iconColor={one ? "#D89402" : "#5A5958"}
      />
      <IconButton
        icon="medal"
        size={40}
        iconColor={two ? "#ABABAB" : "#5A5958"}
      />
      <IconButton
        icon="medal"
        size={40}
        iconColor={three ? "#FFE92C" : "#5A5958"}
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
