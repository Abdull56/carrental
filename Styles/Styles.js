import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
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
