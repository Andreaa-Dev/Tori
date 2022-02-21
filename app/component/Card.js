import React from "react";
import { View, Image } from "react-native";

import colour from "../config/colour";
import chair from "../assets/chair.jpeg";

function Card({ title, price, image }) {
  return (
    <View style={styles.card}>
      <Image source={chair} />
      <AppText>{title}</AppText>
      <AppText>{price}</AppText>
    </View>
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
