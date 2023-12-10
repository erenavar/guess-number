import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View>
      <View style={styles.title}>
        <Title />
      </View>
      <View style={styles.start}>
        <TouchableOpacity style={styles.clear} >
          <Text>Clear</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
        />

        <TouchableOpacity style={styles.approve}>
          <Text>Approve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  title: {
    marginTop: "60%",
    marginHorizontal: "5%",
  },
  start: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "10%",
    marginHorizontal: "5%",
    backgroundColor: "orange",
    height: 120,
    borderRadius: 25,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "yellow",
    width: "10%",
    fontSize: 25,
    marginTop: 30,
  },
  clear: {
    marginTop: 80,
    right: 25,
  },
  approve: {
    marginTop: 80,
    left: 25,
  },
});
