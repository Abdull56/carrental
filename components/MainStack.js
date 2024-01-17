import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../screens/LandingPage';
import TabBar from './TabBar';


const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default MainStack