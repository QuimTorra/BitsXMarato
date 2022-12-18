import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Appbar,
  Headline,
  Paragraph,
  Subheading,
  Title,
} from "react-native-paper";
import * as Animatable from "react-native-animatable";

const Noticia = ({ navigation, route }) => {
  const { noticiaId } = route.params;

  return (
    <>
      <Appbar.Header
        dark={false}
        mode={"center-aligned"}
        style={{ backgroundColor: "#FF675D" }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Notícia" />
      </Appbar.Header>
      <ScrollView>
        <View>
          <Animatable.View animation="zoomIn" duration={500}></Animatable.View>
        </View>
      </ScrollView>
    </>
  );
};

export default Noticia;

const styles = StyleSheet.create({});
