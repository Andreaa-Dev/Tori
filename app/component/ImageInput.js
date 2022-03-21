import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colour from "../config/colour";

export default function ImageInput({ imageUri, handlePress }) {
const [imageUri,setImageUri] = useState()
  const handlePress = () =>{
    if (!imageUri)
  }
  const selectImage = async () =>{
    try{const result = await ImagePicker.launchImageLibraryAsync()
    if (!result.cancelled) setImageUri}
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons color={colour.medium} name="camera" />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
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
