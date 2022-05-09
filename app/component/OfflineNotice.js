import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";
import colour from "../config/colour";

export default function OfflineNotice() {
  const netInfor = useNetInfo();
  if (netInfor.type !== "unknown" && netInfor.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
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
  text: { color: colour.white },
});
