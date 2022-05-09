import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import AppText from "./AppText";
import colour from "../config/colour";

export default function OfflineNotice() {
  return (
    <View style={styles.container}>
      <AppText>No Internet Connection</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colour.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
