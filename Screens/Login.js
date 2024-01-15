import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Login</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Full Name </Text>
            <TextInput style={styles.input} placeholder="full name" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password </Text>
            <TextInput
              style={styles.input}
              placeholder="password"
              secureTextEntry
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="Login"
              color="white"
              onPress={() => navigation.navigate("ForgotPassword")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    backgroundColor: "#fff",
    paddingTop: 20,
    marginTop: 60,
  },

  text: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 35,
    paddingBottom: 10,
  },

  text2: {
    marginBottom: 30,
  },

  inputContainer: {
    marginTop: 10,
    borderColor: "#845EC2",
  },

  inputText: {
    paddingTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 15,
  },

  input: {
    paddingTop: 20,
    borderColor: "purple",
    borderWidth: 1,
    padding: 20,
    width: 370,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  button: {
    marginTop: 30,
  },

  buttonContainer: {
    backgroundColor: "#845EC2",
    marginTop: 30,
    padding: 15,
    borderRadius: 30,
  },
});
