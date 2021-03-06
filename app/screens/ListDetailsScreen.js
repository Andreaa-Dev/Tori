import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../component/AppText";
import colours from "../config/colour";
import ListItem from "../component/item/ListItem";

function ListDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}> {listing.title}</AppText>
        <AppText style={styles.price}> {listing.price} </AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/user.png")}
            title="Andrea"
            subTitle="3 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colours.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 50,
  },
});
export default ListDetailsScreen;
