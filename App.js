import { ImageBackground, StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuessScreen from "./screens/GuessScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="Guess" component={GuessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
