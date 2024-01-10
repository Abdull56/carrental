import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput,StatusBar, Pressable,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DisplayPage({ navigation, route }) {
  const [value, setSearchValue] = useState("");
  const [pickupdate, setPickupDate] = useState(new Date());
  const [returndate, setReturnDate] = useState(new Date());

  console.log(value)

  const onChangepickup = (e, selectedDate) => {
    setPickupDate(selectedDate);
  };

  const onChangereturn = (e, selectedDate) => {
    setReturnDate(selectedDate)
  };

  console.log(pickupdate)
  console.log(returndate)

  return (
    <SafeAreaView style={styles.safecontainer}>
        <StatusBar barStyle={'dark-content'}/>

        <View style={styles.header}>
            <Text style={styles.text}>Rentals</Text>
        </View>
        <View style={styles.border}>
            <Icon name="search" size={22} style={{paddingHorizontal:7}} color="black"/>
            <TextInput style={styles.searchinput} placeholder='Pick-up and Return locations' value={value} onChangeText={setSearchValue}/>
        </View>
        
        <View style={styles.borderContainer}>
            <View style={styles.secborder}>
              <View style={styles.icondate}>
                <Icon name="calendar" size={14} color="#AAD7D9"/>
                <Text style={styles.datePickerLabel}>Pick-up Date:</Text>
              </View>
              <DateTimePicker
                style={styles.datePicker}
                value={pickupdate}
                mode={"date"}
                is24Hour={true}
                onChange={onChangepickup}
              />
            </View>

            <View style={styles.secborder}>
              <View style={styles.icondate}>
                <Icon name="clock-o" size={16} color="#AAD7D9"/>
                <Text style={styles.datePickerLabel}>Time:</Text>
              </View>
              <DateTimePicker
                style={styles.datePicker}
                value={pickupdate}
                mode={"time"}
                is24Hour={true}
                onChange={onChangepickup}
              />
            </View>
        </View>

        <View style={styles.borderContainer}>
            <View style={styles.secborder}>
              <View style={styles.icondate}>
                <Icon name="calendar" size={14} color="#AAD7D9"/>
                <Text style={styles.datePickerLabel}>Return Date:</Text>
              </View>
              <DateTimePicker
                style={styles.datePicker}
                value={returndate}
                mode={"date"}
                is24Hour={true}
                onChange={onChangereturn}
              />
            </View>

            <View style={styles.secborder}>
              <View style={styles.icondate}>
                <Icon name="clock-o" size={16} color="#AAD7D9"/>
                <Text style={styles.datePickerLabel}>Time:</Text>
              </View>
              <DateTimePicker
                style={styles.datePicker}
                value={returndate}
                mode={"time"}
                is24Hour={true}
                onChange={onChangereturn}
              />
            </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Landing")}
          >
            <Text style={{ color: "black", fontSize: 35, alignSelf:'center', paddingTop:7 }}>Search</Text>
          </Pressable>
        </View>

    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal:24,
    marginBottom: 16,
  },
  searchinput:{
    alignSelf:'center',
    fontSize:18,
    paddingHorizontal:10
  },
  border:{
    backgroundColor: '#f5f5f5',
    borderRadius: 17,
    borderWidth: 1,
    padding: 16,
    margin: 14,
    marginHorizontal:23,
    flexBasis:60,
    width:330,
    flexDirection: 'row',
  },
  borderContainer:{
    flexDirection:'row',
    paddingHorizontal:24,
  },
  secborder:{
    backgroundColor: '#f5f5f5',
    borderRadius: 17,
    borderWidth: 1,
    padding: 16,
    margin: 10,
    height:70,
    width: 140,
    justifyContent:'center'
  },
  icondate:
  {
    flexDirection:'row',
  },
  datePicker:{
    width:100,
    marginTop:4
  },
  datePickerLabel:{
    marginHorizontal:4,
    color:'#AAD7D9'
  },
  button:{
    backgroundColor: '#90EE90',
    borderRadius: 26,
    borderWidth: 1,
    flexBasis:60,
    width:310
  },
  buttonContainer:{
    alignItems:'center',
    margin:9
  }
});