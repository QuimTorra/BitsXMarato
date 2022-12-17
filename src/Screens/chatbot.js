import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";

import Message from "../Components/chatbot/message";
import { data } from "../Components/chatbot/data";

let chats = [];

export default function Chatbot() {
  const [msg, setMsg] = useState("");
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    chats = [];
  }, []);

  const getAnswer = (miss) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].question.includes(miss.toLowerCase())) {
        chats = [...chats, { msg: data[i].answer, answer: true }];
        setChatList([...chats].reverse());
        return;
      }
    }

    chats = [
      ...chats,
      {
        msg: "No sé a què et refereixes, necessites ajuda?",
        answer: true,
      },
    ];
    setChatList([...chats].reverse());
    return;
  };

  const onSendMsg = () => {
    chats = [...chats, { msg: msg, sentMsg: true }];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg("");
  };

  return (
    <View>
      <FlatList
        style={{ height: "90%", bottom: "3%" }}
        inverted={true}
        keyExtractor={(_, index) => index.toString()}
        data={chatList}
        renderItem={({ item }) => (
          <Message answer={item.answer} msg={item.msg} sentMsg={item.sentMsg} />
        )}
      />
      <View style={styles.typeMsgContainer}>
        <TextInput
          style={styles.typeMsgBox}
          value={msg}
          placeholder="Escriu Aquí ..."
          onChangeText={(val) => setMsg(val)}
        />
        <TouchableOpacity
          style={[
            styles.sendBtn,
            { backgroundColor: msg ? "#D5614A" : "grey" },
          ]}
          disabled={msg ? false : true}
          onPress={() => onSendMsg()}
        >
          <Text style={styles.sendTxt}>send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  typeMsgContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    bottom: 5,
  },
  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: "grey",
    padding: 10,
    width: "80%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  sendBtn: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  sendTxt: { color: "white" },
});
