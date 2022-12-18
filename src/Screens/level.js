import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Swiper from "react-native-swiper";
import { Button, ProgressBar } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import Pregunta from "../Components/game/Pregunta";

export default function Level({ route, navigation }) {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [quatre, setQuatre] = useState(false);
  const [cinc, setCinc] = useState(false);
  const [sis, setSis] = useState(false);
  const [set, setSet] = useState(false);
  const [vuit, setVuit] = useState(false);
  const [nou, setNou] = useState(false);
  let [encerts, setEncerts] = useState(0);

  const { data } = route.params;

  return (
    <Swiper>
      <View>
        <Pregunta data={data[0].pregunta1} />
        <Animatable.View
          animation={first || second || third ? "jello" : ""}
          duration={1500}
        >
          <Button
            style={styles.buttons}
            buttonColor={first ? "#75D31D" : "#FF675D"}
            onPress={() => {
              if ("1" === data[0].correct) {
                setFirst(true);
                setEncerts(encerts + 1);
              }
            }}
          >
            <Text style={styles.buttontxt}>{data[0].answer1}</Text>
          </Button>
          <Button
            style={styles.buttons}
            buttonColor={second ? "#75D31D" : "#FF675D"}
            onPress={() => {
              if ("2" === data[0].correct) {
                setSecond(true);
                setEncerts(encerts + 1);
              }
            }}
          >
            <Text style={styles.buttontxt}>{data[0].answer2}</Text>
          </Button>
          <Button
            style={styles.buttons}
            buttonColor={third ? "#75D31D" : "#FF675D"}
            onPress={() => {
              if ("3" === data[0].correct) {
                setThird(true);
                setEncerts(encerts + 1);
              }
            }}
          >
            <Text style={styles.buttontxt}>{data[0].answer3}</Text>
          </Button>
        </Animatable.View>
        <ProgressBar
          progress={0}
          color="#FF675D"
          style={{
            height: 20,
            borderRadius: 15,
            width: 250,
            alignSelf: "center",
            marginTop: 50,
          }}
        />
        <Text style={styles.encerts}>Encerts: {encerts}/3</Text>
      </View>
      <View>
        <Pregunta data={data[1].pregunta2} />
        <Button
          style={styles.buttons}
          buttonColor={quatre ? "#75D31D" : "#FF675D"}
          onPress={() => {
            if ("1" === data[1].correct) {
              setQuatre(true);
              setEncerts(encerts + 1);
            }
          }}
        >
          <Text style={styles.buttontxt}>{data[1].answer1}</Text>
        </Button>
        <Button
          style={styles.buttons}
          buttonColor={cinc ? "#75D31D" : "#FF675D"}
          onPress={() => {
            if ("2" === data[1].correct) {
              setCinc(true);
              setEncerts(encerts + 1);
            }
          }}
        >
          <Text style={styles.buttontxt}>{data[1].answer2}</Text>
        </Button>
        <Button
          style={styles.buttons}
          buttonColor={sis ? "#75D31D" : "#FF675D"}
          onPress={() => {
            if ("3" === data[1].correct) {
              setSis(true);
              setEncerts(encerts + 1);
            }
          }}
        >
          <Text style={styles.buttontxt}>{data[1].answer3}</Text>
        </Button>
        <ProgressBar
          progress={0.32}
          color="#FF675D"
          style={{
            height: 20,
            borderRadius: 15,
            width: 250,
            alignSelf: "center",
            marginTop: 50,
          }}
        />
        <Text style={styles.encerts}>Encerts: {encerts}/3</Text>
      </View>
      <View>
        <Pregunta data={data[2].pregunta3} />
        <Button
          style={styles.buttons}
          buttonColor={set ? "#75D31D" : "#FF675D"}
          onPress={() => {
            if ("1" === data[2].correct) {
              setSet(true);
              setEncerts(encerts + 1);
            }
          }}
        >
          <Text style={styles.buttontxt}>{data[2].answer1}</Text>
        </Button>
        <Button
          style={styles.buttons}
          buttonColor={vuit ? "#75D31D" : "#FF675D"}
          onPress={() => {
            if ("2" === data[2].correct) {
              setVuit(true);
              setEncerts(encerts + 1);
            }
          }}
        >
          <Text style={styles.buttontxt}>{data[2].answer2}</Text>
        </Button>
        <Button
          style={styles.buttons}
          buttonColor={nou ? "#75D31D" : "#FF675D"}
          onPress={() => {
            if ("3" === data[2].correct) {
              setNou(true);
              setEncerts(encerts + 1);
            }
          }}
        >
          <Text style={styles.buttontxt}>{data[2].answer3}</Text>
        </Button>
        <ProgressBar
          progress={1}
          color="#FF675D"
          style={{
            height: 20,
            borderRadius: 15,
            width: 250,
            alignSelf: "center",
            marginTop: 50,
          }}
        />
        <Text style={styles.encerts}>Encerts: {encerts}/3</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: 400,
    height: 70,
    marginVertical: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttontxt: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  encerts: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 50,
  },
});
