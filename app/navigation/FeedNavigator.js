import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailScreen from "../screens/ListDetailsScreen";
const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      presentation="modal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ListingScreen" component={ListingScreen} />
      <Stack.Screen
        name="ListingDetailScreen"
        component={ListingDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
