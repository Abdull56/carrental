import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Create from "./assets/Account/Create";

export default function App() {
  return (
    <View style={styles.container}>
      <Create />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
