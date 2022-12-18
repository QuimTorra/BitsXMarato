import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Level({ route, navigation }) {
  const { data } = route.params;
  console.log(data[0].answer1);
  return (
    <View>
      <Text>HOLABUENAS</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
