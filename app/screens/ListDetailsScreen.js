import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../component/AppText";
import colours from "../config/colour";
import ListItem from "../component/ListItem";

function ListDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpeg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}> IKEA Chair</AppText>
        <AppText style={styles.price}> 50$ </AppText>
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
