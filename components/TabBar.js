import React from "react";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import DisplayPage from "../Screens/DisplayPage";
import StackBar from "./StackBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#32de84",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackBar}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={20} color="#006A4E" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={20} color="#006A4E" />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Ionicons name="settings-outline" size={20} color="#006A4E" />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={DisplayPage}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubble-outline" size={20} color="#006A4E" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;
