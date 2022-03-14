import { Platform } from "react-native";
import color from "./colour";

export default {
  text: {
    color,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
