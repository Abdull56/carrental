import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import DisplayPage from "../screens/DisplayPage";
import LandingPage from "../screens/LandingPage";
import DescriptionPage from "../screens/DescriptionPage";
import AvailableCar from "../screens/AvailableCar";

const Stack = createNativeStackNavigator();

function StackBar() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Display"
        component={DisplayPage}
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#FFE5E5" },
        }}
      />
      <Stack.Screen
        name="Car Details"
        component={DescriptionPage}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#FFE5E5",
          },
          contentStyle: { backgroundColor: "#FFE5E5" },
        }}
      />
      <Stack.Screen
        name="AvailableCars"
        component={AvailableCar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackBar;
