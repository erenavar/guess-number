import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GuessPage from "./screens/GuessPage";

export default function App() {
  return (
    <View style={styles.container}>
      <GuessPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
