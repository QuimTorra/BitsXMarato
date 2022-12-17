import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

const faces = (v) => {
  if (v === 2) return require("../../../assets/Happy-removebg-preview.png");
  if (v === 0)
    return require("../../../assets/Happysenseguiñar-removebg-preview.png");
  if (v === 3) return require("../../../assets/Lolface-removebg-preview.png");
  if (v === 1) return require("../../../assets/trist-removebg-preview.png");
  if (v === 4) return require("../../../assets/Enfadat-removebg-preview.png");
};

export default function Message({ answer, sentMsg, msg, avatar }) {
  return (
    <View>
      {answer && (
        <View style={styles.answerBox}>
          <Avatar.Image size={40} source={faces(avatar)} />
          <Text style={styles.answerText}>{msg}</Text>
        </View>
      )}
      {sentMsg && (
        <Text style={styles.sentMsgBox}>
          <Text style={styles.sentMsgText}>{msg}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  answerBox: {
    backgroundColor: "white",
    maxWidth: "75%",
    borderRadius: 10,
    paddingRight: 10,
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: "grey",
    flexDirection: "row",
  },
  answerText: {
    color: "black",
    fontSize: 16,
    marginHorizontal: 2,
    marginRight: 30,
  },
  sentMsgBox: {
    backgroundColor: "green",
    maxWidth: "70%",
    borderRadius: 10,
    padding: 5,
    alignSelf: "flex-end",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  sentMsgText: { color: "#fff", fontSize: 16 },
});
