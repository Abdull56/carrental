import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const Create = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text2}>Create Account to access existing jobs</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Full Name </Text>
          <TextInput style={styles.input} placeholder="first name" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email Name </Text>
          <TextInput style={styles.input} placeholder="last name" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Password </Text>
          <TextInput style={styles.input} placeholder="email" />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Sign Up"
            color="white"
            onPress={() => alert("Sign up")}
          />
        </View>

        <View style={styles.privacyContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#845EC2" : undefined}
          />
          <Text>I agree to privacy policy</Text>
        </View>

        <View style={styles.privacyContainer}>
          <Text>Already have an account ? Sign in </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 10,
  },

  privacyContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },

  checkbox: {
    margin: 8,
  },
});
export default Create;
