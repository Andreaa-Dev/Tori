import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import colour from "../config/colour";
import AppText from "./AppText";

function Card({ title, price, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <AppText>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
        <Image style={styles.image} source={{ uri: imageUrl }} />
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
