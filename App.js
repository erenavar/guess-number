import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Title from "./components/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.start}>
        <TouchableOpacity>
          <Text>Clear</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} />
        <TouchableOpacity>
          <Text>Approve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 200,
    marginHorizontal: 30,
  },
  start: {
    flexDirection: "row",
  },
  input: {
    borderBottomWidth: 1,
    width: "10%",
    fontSize: 25,
  },
});
