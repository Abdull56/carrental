import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from "../components/styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
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
                <View style={globalStyles.cardIntro}>
                    <Text style={globalStyles.text}>Log Out</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="logout" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.hrLine} />
                <View style={globalStyles.cardIntro}>
                    <Text style={globalStyles.text}>Edit Profile</Text>
                    <TouchableOpacity>
                        <Icon name="edit" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.hrLine} />
                <View style={globalStyles.cardIntro}>
                    <Text style={globalStyles.text}>App Support</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="contact-support" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.hrLine} />
                <View style={globalStyles.cardIntro}>
                    <Text style={globalStyles.text}>Rate App</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="star-rate" size={34} color="black"  
                        style={{ flexDirection:'row', paddingHorizontal: 18 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}



export default Profile