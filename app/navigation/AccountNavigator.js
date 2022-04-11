import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="MessageScreen"
      component={MessageScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>;
};

export default AccountNavigator;
