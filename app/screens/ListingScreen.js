import { FlatList, StyleSheet } from "react-native";
import React from "react";

import Screen from "../component/Screen";
import Card from "../component/Card";
import colour from "../config/colour";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Chair from Ikea",
    price: 50,
    image: require("../assets/chair.jpeg"),
  },
  {
    id: 2,
    title: "Table in good condition",
    price: 150,
    image: require("../assets/chair.jpeg"),
  },
];

export default function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          <Card
            title={item.title}
            price={item.price + "$"}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />;
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 21, backgroundColor: colour.light },
});
