import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  SectionList,
  Pressable,
  Image,
  ScrollView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import carData from "../data.json";
import { globalStyles } from "../components/styles/globalStyles";
import { registerStyles } from "../components/styles/globalStyles";

export default function DisplayPage({ navigation }) {
  const [value, setSearchValue] = useState("");
  const [pickupdate, setPickupDate] = useState(new Date());
  const [returndate, setReturnDate] = useState(new Date());
  const [isLiked, setLiked] = useState(false);

  console.log(value);

  const onChangepickup = (e, selectedDate) => {
    setPickupDate(selectedDate);
  };

  const onChangereturn = (e, selectedDate) => {
    setReturnDate(selectedDate);
  };

  console.log(pickupdate);
  console.log(returndate);

  const filteredCarData = carData.map((section) => ({
    ...section,
    data: section.data.filter((item) => parseInt(item.id) <= 2),
  }));

  const handlePress = () => {
    setLiked(!isLiked);
  };

  const handleSecondPress = (item) => {
    navigation.navigate("Car Details", { carData: item });
  };

  return (
    <SafeAreaView style={globalStyles.safecontainer}>
      <StatusBar barStyle={"dark-content"} />

      <View style={globalStyles.header}>
        <Text style={globalStyles.text}>Rentals</Text>
      </View>
      <View style={globalStyles.border}>
        <Icon
          name="search"
          size={22}
          style={{ paddingHorizontal: 7 }}
          color="black"
        />
        <TextInput
          style={globalStyles.searchinput}
          placeholder="Pick-up and Return locations"
          value={value}
          onChangeText={setSearchValue}
        />
      </View>

      <View style={globalStyles.borderContainer}>
        <View style={globalStyles.secborder}>
          <View style={globalStyles.icondate}>
            <Icon name="calendar" size={14} color="#AAD7D9" />
            <Text style={globalStyles.datePickerLabel}>Pick-up Date:</Text>
          </View>
          <DateTimePicker
            style={globalStyles.datePicker}
            value={pickupdate}
            mode={"date"}
            is24Hour={true}
            onChange={onChangepickup}
          />
        </View>

        <View style={globalStyles.secborder}>
          <View style={globalStyles.icondate}>
            <Icon name="clock-o" size={16} color="#AAD7D9" />
            <Text style={globalStyles.datePickerLabel}>Time:</Text>
          </View>
          <DateTimePicker
            style={globalStyles.datePicker}
            value={pickupdate}
            mode={"time"}
            is24Hour={true}
            onChange={onChangepickup}
          />
        </View>
      </View>

      <View style={globalStyles.borderContainer}>
        <View style={globalStyles.secborder}>
          <View style={globalStyles.icondate}>
            <Icon name="calendar" size={14} color="#AAD7D9" />
            <Text style={globalStyles.datePickerLabel}>Return Date:</Text>
          </View>
          <DateTimePicker
            style={globalStyles.datePicker}
            value={returndate}
            mode={"date"}
            is24Hour={true}
            onChange={onChangereturn}
          />
        </View>

        <View style={globalStyles.secborder}>
          <View style={globalStyles.icondate}>
            <Icon name="clock-o" size={16} color="#AAD7D9" />
            <Text style={globalStyles.datePickerLabel}>Time:</Text>
          </View>
          <DateTimePicker
            style={globalStyles.datePicker}
            value={returndate}
            mode={"time"}
            is24Hour={true}
            onChange={onChangereturn}
          />
        </View>
      </View>

      <View style={registerStyles.buttonContainer}>
        <Button
          style={registerStyles.button}
          title="Sign Up"
          color="white"
          onPress={() => navigation.navigate("TabBar")}
        />
      </View>

      {/* <View style={globalStyles.buttonContainer}>
        <Pressable
          style={globalStyles.button}
          onPress={() => navigation.navigate("Landing")}
        >
          <Text
            style={{
              color: "black",
              fontSize: 35,
              alignSelf: "center",
              paddingTop: 3,
            }}
          >
            Search
          </Text>
        </Pressable>
      </View> */}

      <View style={globalStyles.carContainer}>
        <View style={globalStyles.cardIntro}>
          <Text style={globalStyles.text}>Most Popular Cars</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AvailableCars", { isLiked: true })
            }
          >
            <Icon
              name="arrow-right"
              size={20}
              color="black"
              style={{ paddingTop: 6, paddingHorizontal: 18 }}
            />
          </TouchableOpacity>
        </View>
        <SectionList
          sections={filteredCarData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSecondPress(item)}>
              <View style={globalStyles.card}>
                <View style={globalStyles.imageCard}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={globalStyles.image}
                    resizeMode="contain"
                  />

                  <TouchableOpacity onPress={handlePress}>
                    <Icon
                      name={isLiked ? "heart" : "heart"}
                      size={24}
                      color={isLiked ? "red" : "#EAECCC"}
                    />
                  </TouchableOpacity>
                </View>
                <View style={globalStyles.cardCars}>
                  <Text style={globalStyles.cardText}>{item.name}</Text>
                  <Text style={globalStyles.cardText}>
                    <Icon name="star" size={16} color="#FF9800" />
                    {item.stars}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
