import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../Screens/SignUp";
import Login from "../Screens/Login";
import ForgotPassword from "../Screens/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="Sign Up"
      screenOptions={{
        headerStyle: { backgroundColor: "#845EC2" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
