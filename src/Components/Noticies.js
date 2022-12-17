import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";

import LottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";

const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="newspaper-variant-multiple"
    style={{ backgroundColor: "#FF675D" }}
  />
);

export default function Noticies() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);

  return (
    <>
      {!load && (
        <>
          <View style={styles.animationview}>
            <LottieView
              source={require("../../assets/animations/29447-global-mobile-news-network.json")}
              autoPlay
              style={{ height: 300, width: 300, alignSelf: "center" }}
            />
          </View>
        </>
      )}
      {load && (
        <>
          <ScrollView horizontal>
            <View style={styles.wrapper}>
              <Animatable.View animation="zoomIn" duration={500}>
                <Card elevation={5} style={styles.noticies}>
                  <Card.Title
                    title="BITSxLAMARATÓ"
                    subtitle="Hackathon per la salut cardiovascular"
                    left={LeftContent}
                  />
                  <Card.Cover
                    source={{
                      uri: "https://www.bsc.es/sites/default/files/public/bscw2/content/news/horizontal-image/bitsxlamarato_1.jpg",
                    }}
                  />
                  <Card.Content style={styles.contingut}>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                  </Card.Content>
                </Card>
              </Animatable.View>

              <Animatable.View animation="zoomIn" duration={500}>
                <Card elevation={5} style={styles.noticies}>
                  <Card.Title
                    title="No és l'únic perill..."
                    subtitle="El risc de trombosi a ciutats en guerra"
                    left={LeftContent}
                  />
                  <Card.Cover
                    source={{
                      uri: "https://trombo.info/wp-content/uploads/2022/11/london-blitz.jpg",
                    }}
                  />
                  <Card.Content style={styles.contingut}>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                  </Card.Content>
                </Card>
              </Animatable.View>

              <Animatable.View animation="zoomIn" duration={500}>
                <Card elevation={5} style={styles.noticies}>
                  <Card.Title
                    title="ETVs: Anyone, anywhere"
                    subtitle="Personalitats diverses que les han patit"
                    left={LeftContent}
                  />
                  <Card.Cover
                    source={{
                      uri: "https://trombo.info/wp-content/uploads/2022/11/tromboinfo-nobelPrize-blood-clot-1.jpg",
                    }}
                  />
                  <Card.Content style={styles.contingut}>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                  </Card.Content>
                </Card>
              </Animatable.View>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  animationview: {},
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 8,
  },
  noticies: {
    marginHorizontal: 8,
    width: 350,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
  },
  contingut: {
    marginHorizontal: 8,
  },
});
