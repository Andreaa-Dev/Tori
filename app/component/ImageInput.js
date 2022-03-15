import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colour from "../config/colour";

export default function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons color={colour.medium} name="camera" />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colour.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
