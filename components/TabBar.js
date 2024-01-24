import React from "react";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import DisplayPage from "../Screens/DisplayPage";
import StackBar from "./StackBar";
import { globalStyles } from "./styles/globalStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      barStyle={globalStyles.tabcontainer}
      screenOptions={{ headerShown: false }}
    >
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
          tabBarIcon: () => <Ionicons name="chatbubble-outline" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;
