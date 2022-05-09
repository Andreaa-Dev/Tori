import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-community/async-storage";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/NavigationTheme";
import OfflineNotice from "./app/component/OfflineNotice";

export default function App() {
  // const netInfo = useNetInfo();
  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem("person", Json.stringify({ id: 1 }));
  //     const value = AsyncStorage.getItem("person");
  //     const person = JSON.parse(value);
  //     console.log(person);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // return <Button disabled={!netInfo.isInternetReachable} />;
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
