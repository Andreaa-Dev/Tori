import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Swipeable, Switch } from "react-native-gesture-handler";

import colour from "../config/colour";
import AppText from "./AppText";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colour.light}
        onPress={() => console.log()}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}> {title}</AppText>
            <AppText style={styles.subTitle}> {subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 20 },
  image: { heigh: 50, width: 50, borderRadius: 35, marginRight: 10 },
  title: {
    fontWeight: 500,
  },
  subTitle: {
    color: colour.medium,
  },
});

export default ListItem;
