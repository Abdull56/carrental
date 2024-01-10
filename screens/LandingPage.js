import React from "react";
import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";

export default function LandingPage({ navigation, route }) {

  const back = require('../assets/bg1.jpg');  
  return (
    <ImageBackground
        source={back} 
        style={styles.backgroundImage}
    >
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Rentals</Text>
            </View>
            
            <View>
                <Text style={styles.text}>Find the ideal car rental for your trip</Text> 
                <Text style={styles.secondtext}>Get access to the best deals from global car brands</Text> 
            </View>

            <View style={styles.buttonContainer}>
                <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate("Display")}
                >
                    <Text style={{ color: "black", fontSize: 25, alignSelf:'center', paddingTop:10 }}>Get Started</Text>
                </Pressable>
            </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 54,
    paddingHorizontal: 14
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle:'italic',
    color: '#f5f5f5',
  },
  secondtext:{
    fontSize: 19,
    color: '#fff',
    paddingTop: 25
  },
  button:{
    backgroundColor: '#90EE90',
    borderRadius: 26,
    borderWidth: 1,
    flexBasis:50
  },
  buttonContainer:{
    paddingBottom: 28, 
    justifyContent: 'flex-end',
  }
});