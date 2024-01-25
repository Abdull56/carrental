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
