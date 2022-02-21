import React from "react";
import { Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View>
      <View>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image source={require("../assets/ma.jpeg")} />
    </View>
  );
}

export default ViewImageScreen;
