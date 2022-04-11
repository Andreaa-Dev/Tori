import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen}></Stack.Screen>
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigator;
