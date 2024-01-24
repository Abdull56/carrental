import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../Styles/Styles";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export default function Login({ navigation }) {
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
          <View>
            <Text style={globalStyles.text}>Login</Text>

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
                title="Login"
                color="white"
                onPress={() => navigation.navigate("ForgotPassword")}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
