import { ImageBackground, StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
