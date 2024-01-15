import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function ForgotPassword() {
  <ScrollView>
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Forgot Password</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>New Password</Text>
          <TextInput style={styles.input} placeholder="New Password" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Cornfirm Password </Text>
          <TextInput style={styles.input} placeholder="Cornfirm Password" />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Verify"
            color="white"
            onPress={() => alert("No Details")}
          />
        </View>
      </View>
    </View>
  </ScrollView>;
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
    borderRadius: 10,
  },
});
