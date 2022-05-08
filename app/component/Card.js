import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colour from "../config/colour";
import AppText from "./AppText";

function Card({ title, price, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <AppText>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colour.white,
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  price: {
    color: colour.secondary,
    fontWeight: "500",
  },
});
export default Card;
