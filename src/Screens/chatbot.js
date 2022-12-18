import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Appbar } from "react-native-paper";

import LottieView from "lottie-react-native";
import Message from "../Components/chatbot/message";
import { data } from "../Components/chatbot/data";

let chats = [];

const jaccard = (msg) => {
  let maxSimilarity = 0;
  let maxIndx = -1;

  const msgWords = msg.split(" ");
  const arrayWords = data.map((el) => el.question.split(" "));

  for (let i = 0; i < arrayWords.length; i++) {
    const intersection = arrayWords[i].filter((x) => msgWords.includes(x));
    const union = arrayWords[i]
      .concat(msgWords)
      .filter((x, i, arr) => arr.indexOf(x) === i);
    const similarity = intersection.length / union.length;

    if (similarity == 1) {
      return data[i];
    }

    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      maxIndx = i;
    }
  }

  if (maxSimilarity == 0) {
    return {
      question: "diablo papi",
      answer: "No entenc el que em demanes. Torna-ho a intentar! :)",
      avatar: 0,
    };
  }
  return data[maxIndx];
};

export default function Chatbot({ navigation }) {
  const [msg, setMsg] = useState("");
  const [chatList, setChatList] = useState([]);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    chats = [];
  }, []);

  const getAnswer = (miss) => {
    let ans = jaccard(miss.toLowerCase());
    chats = [...chats, { msg: ans.answer, answer: true, avatar: ans.avatar }];
    setChatList([...chats].reverse());
    return;
  };

  const onSendMsg = () => {
    if (!animation) setAnimation(true);
    chats = [...chats, { msg: msg, sentMsg: true }];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg("");
  };

  return (
    <View>
      <Appbar.Header
        dark={false}
        mode={"center-aligned"}
        style={{ backgroundColor: "#FF675D", zIndex: 1, postion: "absolute" }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Soro el metge" />
      </Appbar.Header>
      {!animation && (
        <View style={styles.animation}>
          <LottieView
            source={require("../../assets/animations/31548-robot-says-hello.json")}
            autoPlay
            style={{
              height: 300,
              width: 300,
              marginTop: 100,
              alignSelf: "center",
              marginRight: 16,
            }}
          />
          <Text style={styles.animationtxt}>No tinguis por 😊 Saluda!!</Text>
        </View>
      )}
      <View>
        <FlatList
          style={{ height: "90%", bottom: "27%" }}
          inverted={true}
          keyExtractor={(_, index) => index.toString()}
          data={chatList}
          renderItem={({ item }) => (
            <Message
              answer={item.answer}
              msg={item.msg}
              sentMsg={item.sentMsg}
              avatar={item.avatar}
            />
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
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    position: "absolute",
  },
  animationtxt: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 16,
  },
  typeMsgContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    bottom: 160,
  },
  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: "grey",
    padding: 6,
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
