import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import colour from "../config/colour";

function Card({ title, price, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <AppText>{title}</AppText>
        <AppText>{price}</AppText>
        <Image source={{ uri: imageUrl }} />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colour.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
export default Card;
