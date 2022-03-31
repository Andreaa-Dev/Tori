import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LogInScreen";
const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
  </Stack.Navigator>
);

export default AuthNavigator;
