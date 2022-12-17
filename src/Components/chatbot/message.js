import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

// 0 Happy
// 1 Trist
// 2 GuiñarUll
// 3 LolFace
// 4 Enfadat

export default function Message({ answer, sentMsg, msg }) {
  return (
    <View>
      {answer && (
        <View style={styles.answerBox}>
          <Avatar.Image
            size={40}
            source={require("../../../assets/Happysenseguiñar-removebg-preview.png")}
          />
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
