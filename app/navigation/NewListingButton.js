import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colour from "../config/colour";

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colour.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colour.primary,
    height: 80,
    width: 80,
    bottom: 20,
    borderColor: colour.white,
    borderRadius: 40,
    borderWidth: 10,
  },
});
