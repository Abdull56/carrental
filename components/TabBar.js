import React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import LandingPage from '../screens/LandingPage';
import DisplayPage from '../screens/DisplayPage';
import DescriptionPage from '../screens/DescriptionPage';
import StackBar from './StackBar';
import { styles } from '../styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();


function TabBar() {
  return (
    <Tab.Navigator barStyle={styles.tabcontainer} screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={StackBar}
          options={{
            tabBarIcon: () => <Ionicons name="home-outline" size={20} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Settings}
          options={{
            tabBarIcon: () => <Ionicons name="person" size={20} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => <Ionicons name="settings-outline" size={20} />,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={DisplayPage}
          options={{
            tabBarIcon: () => <Ionicons name="chatbubble-outline"  size={20}/>,
          }}
        />
    </Tab.Navigator>
  )
}

export default TabBar