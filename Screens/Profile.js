import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native'
import { globalStyles } from "../components/styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={globalStyles.safecontainer2}>
        
        <View style={globalStyles.profileborder}>
            <View style={globalStyles.profileborder2}>
                <Icon name="plus-circle" size={54} color="white"  
                style={{ paddingTop: 26, paddingHorizontal: 18 }}
                />
                <Text style={{paddingTop : 6}}>Add Profile Picture</Text>
            </View>
        </View>  
        <View style={globalStyles.firstbackground}>
            <View style={globalStyles.textborder}>
               <TouchableOpacity>
               <    View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>Log Out</Text>
                        <MaterialIcons name="logout" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
               </TouchableOpacity>
                <View style={globalStyles.hrLine} />
                <TouchableOpacity>
                    <View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>Edit Profile</Text>
                        <Icon name="edit" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={globalStyles.hrLine} />
                <TouchableOpacity>
                    <View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>App Support</Text>
                        <MaterialIcons name="contact-support" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={globalStyles.hrLine} />
                <TouchableOpacity  onPress={toggleModal}>
                    <View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>About us</Text>
                        <Icon name="info-circle" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={globalStyles.hrLine} />
                <TouchableOpacity>
                    <View style={globalStyles.cardIntro}>
                        <Text style={globalStyles.text}>Rate App</Text>
                        <MaterialIcons name="star-rate" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <Modal visible={isModalVisible} animationType="slide"  presentationStyle="pageSheet">
            <View style={globalStyles.modalContainer}>
                <Text>Hello! This is the About Us Page.</Text>
                <View style={globalStyles.hrLine} />
                
                <Text>
                    The car rental application provides a seamless and efficient solution for individuals seeking convenient and 
                    flexible transportation options. With user-friendly interfaces and advanced features, the app allows users to
                    effortlessly browse through a diverse fleet of vehicles, ranging from compact cars to spacious SUVs. 
                    Offering a hassle-free booking process, users can quickly reserve their desired vehicle, specify pickup 
                    and drop-off locations, and choose rental durations that suit their needs. The application also incorporates 
                    real-time availability updates and transparent pricing, ensuring users have all the information needed to make informed decisions. 
                    Additionally, the app may include features such as GPS navigation, fuel tracking, and digital documentation,
                    enhancing the overall rental experience. Whether for business trips, vacations, or daily commuting,
                    the car rental app simplifies the process of securing reliable and comfortable transportation,
                    contributing to a more convenient and enjoyable travel experience for users
                </Text>
                <Pressable
                    style={globalStyles.button2}
                    onPress={toggleModal}
                >
                    <Text
                        style={{
                        color: "black",
                        fontSize: 20,
                        alignSelf: "center",
                        paddingTop: 3,
                        }}
                    >
                        Close Page
                    </Text>
                </Pressable>
            </View>
        </Modal>
    </SafeAreaView>
  )
}



export default Profile