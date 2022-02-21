import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import welcome from "../assets/background.jpeg";
import logo from "../assets/logo.png";
import AppButton from "../component/AppButton";
import AppText from "../component/AppText";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={0.5}
      style={styles.background}
      source={welcome}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <AppText> All items, every day, better than before</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    bottom: 570,
    alignItems: "center",
  },
  logo: {
    height: 70,
    width: 70,
    position: "absolute",
    bottom: 50,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});
