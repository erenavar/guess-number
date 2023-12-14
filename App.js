import { ImageBackground, StyleSheet } from "react-native";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        source={require("./assets/back.jpg")}
        style={styles.image}
        resizeMode="stretch"
        imageStyle={{ opacity: 0.3 }}
      >
        <GameScreen />
      </ImageBackground>
    </LinearGradient>
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
