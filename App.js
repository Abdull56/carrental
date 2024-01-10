import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Button } from 'react-native';
import LandingPage from './screens/LandingPage';
import DisplayPage from './screens/DisplayPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Landing' component={LandingPage} options={{headerShown: false}}/>
        <Stack.Screen
          name='Display'
          component={DisplayPage}
          options={{
            headerShown: false, 
            contentStyle: { backgroundColor: '#FFE5E5' }, 
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
