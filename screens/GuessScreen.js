import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GameScreen from "./GameScreen";

export default function GuessScreen({ route }) {
  const { number } = route.params;

  return (
    <View>
      <Text>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
