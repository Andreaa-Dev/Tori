import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colour from "../../config/colour";
import AppText from "../AppText";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  renderRightActions,
  onPress,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colour.light} onPress={() => onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.title} numberOfLine={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLine={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colour.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    backgroundColor: colour.white,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: { height: 50, width: 50, borderRadius: 35 },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colour.medium,
  },
});

export default ListItem;
