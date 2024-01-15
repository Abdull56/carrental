import {
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { globalStyles } from "../Styles/Styles";

export default function SignUp({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <View style={globalStyles.container}>
          <Text style={globalStyles.text}>Create Account</Text>
          <Text style={globalStyles.text2}>
            Create Account to access existing jobs
          </Text>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.inputText}>Full Name </Text>
            <TextInput style={globalStyles.input} placeholder="full name" />
          </View>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.inputText}>Email </Text>
            <TextInput style={globalStyles.input} placeholder="email" />
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
              title="Sign Up"
              color="white"
              onPress={() => navigation.navigate("Login")}
            />
          </View>

          <View style={globalStyles.privacyContainer}>
            <Checkbox
              style={globalStyles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#845EC2" : undefined}
            />
            <Text>I agree to privacy policy</Text>
          </View>

          <View style={globalStyles.privacyContainer}>
            <Text>Already have an account ? Sign in </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
