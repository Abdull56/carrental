import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../Styles/Styles";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export default function ForgotPassword() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(value, actions) => {
          console.log(value);
        }}
      >
        {(props) => (
          <View>
            <View>
              <Text style={globalStyles.text}>ForgotPassword</Text>

              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputText}>Email</Text>
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
                  title="Verify"
                  color="white"
                  // onPress={props.handleSubmit("")}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
