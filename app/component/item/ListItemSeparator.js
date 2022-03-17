import React from "react";
import { StyleSheet, View } from "react-native";

import colour from "../../config/colour";

function ListItemSeparator(props) {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colour.primary,
  },
});
export default ListItemSeparator;
