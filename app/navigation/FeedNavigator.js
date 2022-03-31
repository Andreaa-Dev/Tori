import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Listings"
      component={ListingScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="ListingDetailScreen"
      component={ListingDetailScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>;
};

export default FeedNavigator;
