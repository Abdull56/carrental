import {
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { globalStyles } from "../Styles/Styles";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  // fullname: yup.string().required("Fullname is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export default function SignUp({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(value, actions) => {
        console.log(value);
      }}
    >
      {(props) => (
        <View style={globalStyles.container}>
          <KeyboardAvoidingView behavior="padding">
            <View>
              <Text style={globalStyles.text}>Create Account</Text>
              <Text style={globalStyles.text2}>
                Create Account to access existing jobs
              </Text>

              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputText}>Full Name </Text>
                <TextInput
                  style={globalStyles.input}
                  placeholder="full name"
                  onChangeText={props.handleChange("fullname")}
                  // value={props.values.fullname}
                />
                {/* <Text style={{ color: "red" }}>{props.errors.fullname}</Text> */}
              </View>

              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputText}>Email </Text>
                <TextInput
                  style={globalStyles.input}
                  placeholder="email"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
                <Text style={{ color: "red" }}>{props.errors.email}</Text>
              </View>

              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputText}>Password </Text>
                <TextInput
                  style={globalStyles.input}
                  placeholder="password"
                  secureTextEntry
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                />
                <Text style={{ color: "red" }}>{props.errors.password}</Text>
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
        </View>
      )}
    </Formik>
  );
}
