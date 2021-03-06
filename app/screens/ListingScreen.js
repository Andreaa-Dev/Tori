import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";

import Screen from "../component/Screen";
import Card from "../component/Card";
import colour from "../config/colour";
import routes from "../navigation/routes";
import AppText from "../component/AppText";
import Button from "../component/AppButton";
// import ActivityIndicator from "../component/ActivityIndicator";
import useApi from "../hooks/useApi";
import listingApi from "../api/listing";
import ListDetailsScreen from "./ListDetailsScreen";

export default function ListingScreen({ navigation }) {
  const getListingsApi = useApi(listingApi.getListings);
  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText> Could not fetch data</AppText>
          <Button title="Retry" onPress={getListingsApi.loadListings} />
        </>
      )}
      {/* <ActivityIndicator visible={getListingsApi.loading} /> */}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              price={item.price + "$"}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 10, backgroundColor: colour.light },
});
