import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colour from "../config/colour";
import AppText from "./AppText";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}> {title}</AppText>
        <AppText style={styles.subTitle}> {subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { heigh: 50, width: 50, borderRadius: 35, marginRight: 10 },
  title: {
    fontWeight: 500,
  },
  subTitle: {
    color: colour.medium,
  },
});

export default ListItem;
