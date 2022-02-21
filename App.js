import { StatusBar } from "expo-status-bar";
import { divide } from "lodash";
import { StyleSheet, Text, View } from "react-native";

import ListDetailsScreen from "./app/screens/ListDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessageScreen from "./app/screens/MessageScreen";
export default function App() {
  return <MessageScreen />;
}
