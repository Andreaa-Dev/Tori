import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../component/Screen";

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

export default function ListingScreen() {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
