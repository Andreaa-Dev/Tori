import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import Screen from "../component/Screen";
import Card from "../component/Card";
import colour from "../config/colour";
import routes from "../navigation/routes";
import listingsApi from "../api/listing";
import AppText from "../component/AppText";
import Button from "../component/AppButton";
import ActivityIndicator from "../component/ActivityIndicator";

export default function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);
    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText> Could not fetch data</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={true} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          <Card
            title={item.title}
            price={item.price + "$"}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />;
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 21, backgroundColor: colour.light },
});
