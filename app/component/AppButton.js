import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import colour from "../config/colour";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colour.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colour.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
