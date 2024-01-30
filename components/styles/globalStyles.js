import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 18,
    marginBottom: 16,
  },
  searchinput: {
    alignSelf: "center",
    fontSize: 18,
    paddingHorizontal: 10,
  },
  border: {
    backgroundColor: "#f5f5f5",
    borderRadius: 17,
    borderWidth: 1,
    padding: 16,
    margin: 14,
    marginHorizontal: 23,
    flexBasis: 60,
    width: 330,
    flexDirection: "row",
  },
  borderContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  secborder: {
    backgroundColor: "white",
    borderRadius: 17,
    borderWidth: 1,
    padding: 16,
    margin: 10,
    height: 70,
    width: 140,
    justifyContent: "center",
  },
  icondate: {
    flexDirection: "row",
  },
  datePicker: {
    width: 100,
    marginTop: 4,
    backgroundColor: "white",
  },
  datePickerLabel: {
    marginHorizontal: 4,
    color: "#AAD7D9",
  },
  button: {
    backgroundColor: "#90EE90",
    borderRadius: 26,
    borderWidth: 1,
    flexBasis: 60,
    width: 337,
  },
  buttonContainer: {
    alignItems: "center",
    margin: 9,
  },
  carContainer: {
    margin: 6,
  },
  cardIntro: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    width: 350,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  imageCard: {
    flexDirection: "row",
  },
  cardCars: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 170,
    marginBottom: 16,
    marginLeft: -10,
  },
  tabcontainer: {
    backgroundColor: "red",
  },
});

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    padding: 15,
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
    borderColor: "#845EC2",
  },

  inputText: {
    paddingTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 15,
  },

  input: {
    borderColor: "purple",
    borderWidth: 1,
    padding: 20,
    // width: 370,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  button: {
    marginTop: 20,
  },

  buttonContainer: {
    backgroundColor: "#845EC2",
    marginTop: 30,
    padding: 15,
    borderRadius: 40,
  },

  privacyContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },

  checkbox: {
    margin: 10,
  },
});
