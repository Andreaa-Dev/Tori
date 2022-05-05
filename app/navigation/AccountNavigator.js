import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
