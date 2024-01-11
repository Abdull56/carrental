import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import DisplayPage from '../screens/DisplayPage';
import LandingPage from '../screens/LandingPage';

const Stack = createNativeStackNavigator();

function StackBar() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="Display" component={DisplayPage} options={{ headerShown: false, contentStyle: { backgroundColor: '#FFE5E5' } }} />
    </Stack.Navigator>
  )
}

export default StackBar