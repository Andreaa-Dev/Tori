import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colour from "../config/colour";

export default function NewListingButton() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colour.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
  },
});
