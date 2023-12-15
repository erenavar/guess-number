import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import { LinearGradient } from "expo-linear-gradient";

export default function GameScreen() {
  const [number, setNumber] = useState();
  const clearNumber = () => {
    setNumber();
  };

  const confirmNumber = () => {
    if (number > 0 && number < 100) {
    } else {
      Alert.alert("Invalid Number", "Text a Number Between 0 and 100", [
        { text: "Ok", style: "cancel", onPress: clearNumber },
      ]);
      clearNumber();
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        source={require("../assets/back.jpg")}
        style={styles.image}
        resizeMode="stretch"
        imageStyle={{ opacity: 0.3 }}
      >
        <View style={styles.title}>
          <Title />
        </View>
        <View style={styles.start}>
          <TouchableOpacity style={styles.clear} onPress={clearNumber}>
            <Text>Clear</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            value={number}
            onChangeText={(text) => setNumber(text)}
          />

          <TouchableOpacity style={styles.approve} onPress={confirmNumber}>
            <Text>Approve</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </LinearGradient>
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
  image: {
    flex: 1,
  },
});
