import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailScreen from "../screens/ListDetailsScreen";
const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingScreen}></Stack.Screen>
      <Stack.Screen
        name="ListingDetailScreen"
        component={ListingDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FeedNavigator;
