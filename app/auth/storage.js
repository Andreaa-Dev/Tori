import * as SecureStore from "expo-secure-store";

const key = "authToken";
const storeToken = async (authToken) => {
  try {
    return await SecureStore.setItemAsync(key);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};
