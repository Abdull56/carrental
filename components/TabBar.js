import React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import LandingPage from '../screens/LandingPage';
import DisplayPage from '../screens/DisplayPage';
import StackBar from './StackBar';
import { styles } from '../styles';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator barStyle={styles.tabcontainer}>
        <Tab.Screen
          name="Home"
          component={StackBar}
          options={{
            tabBarIcon: () => <Ionicons name="home-outline" size={20} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={DisplayPage}
          options={{
            tabBarIcon: () => <Ionicons name="person" size={20} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={DisplayPage}
          options={{
            tabBarIcon: () => <Ionicons name="settings-outline" size={20} />,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={DisplayPage}
          options={{
            tabBarIcon: () => <Ionicons name="chatbubble-outline" />,
          }}
        />
    </Tab.Navigator>
  )
}

export default TabBar