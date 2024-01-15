import React from "react";
import { Text, View, ScrollView, TextInput, Button } from "react-native";
import { globalStyles } from "../Styles/Styles";

export default function Login({ navigation }) {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View>
          <Text style={globalStyles.text}>Login</Text>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.inputText}>Full Name </Text>
            <TextInput style={globalStyles.input} placeholder="full name" />
          </View>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.inputText}>Password </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="password"
              secureTextEntry
            />
          </View>

          <View style={globalStyles.buttonContainer}>
            <Button
              style={globalStyles.button}
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
