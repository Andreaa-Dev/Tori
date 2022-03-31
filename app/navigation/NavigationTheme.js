import { DefaultTheme } from "@react-navigation/native";
import colour from "../config/colour";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colour.primary,
    background: colour.white,
  },
};
