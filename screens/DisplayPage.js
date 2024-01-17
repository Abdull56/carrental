import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput,StatusBar,TouchableOpacity, SectionList, Pressable, Image,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "@react-native-community/datetimepicker";
import carData from '../data.json';
import { styles } from "../styles";


export default function DisplayPage({ navigation}) {
  
  const [value, setSearchValue] = useState("");
  const [pickupdate, setPickupDate] = useState(new Date());
  const [returndate, setReturnDate] = useState(new Date());
  const [isLiked, setLiked] = useState(false);
  
  console.log(value)

  const onChangepickup = (e, selectedDate) => {
    setPickupDate(selectedDate);
  };

  const onChangereturn = (e, selectedDate) => {
    setReturnDate(selectedDate)
  };

  console.log(pickupdate)
  console.log(returndate)

  const filteredCarData = carData.map(section => ({
    ...section,
    data: section.data.filter(item => parseInt(item.id) <= 2)
  }));

  const handlePress = () => {
 
    setLiked(!isLiked);
  };

  const handleSecondPress = (item) => {
    navigation.navigate('Car Details', { carData: item });
  };


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
            <Text style={{ color: "black", fontSize: 35, alignSelf:'center', paddingTop:3 }}>Search</Text>
          </Pressable>
        </View>

        <View style={styles.carContainer}>
          <View style={styles.cardIntro}>
            <Text style={styles.text}>Most Popular Cars</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AvailableCars', { isLiked: true })}>
              <Icon name="arrow-right" size={20} color="black"  style={{paddingTop: 6, paddingHorizontal:18}}/>
            </TouchableOpacity>
          </View>
          <SectionList
            sections={filteredCarData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSecondPress(item)}>
                <View style={styles.card}>
                  <View style={styles.imageCard}>
                    <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode='contain' />

                    <TouchableOpacity onPress={handlePress}>
                      <Icon
                        name={isLiked ? 'heart' : 'heart'}
                        size={24}
                        color={isLiked ? 'red' : '#EAECCC'} 
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cardCars}>
                    <Text style={styles.cardText}>{item.name}</Text>
                    <Text style={styles.cardText}>
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

