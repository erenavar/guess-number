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
        <View>
          <TouchableOpacity>
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <TextInput />
        </View>
        <View style={{ verticalAlign: "top" }}>
          <TouchableOpacity>
            <Text>Approve</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    width: "10%",
    fontSize: 25,
  },
});
