import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title() {
  return (
    <View>
      <Text style={styles.title}>Guess Number Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    borderWidth: 1,
    borderColor: "red",
    fontSize: 25,
    borderRadius: 20,
    paddingHorizontal: "8%",
    paddingVertical: "4%",
  },
});
