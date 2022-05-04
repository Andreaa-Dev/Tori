import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import colour from "../config/colour";
import Icon from "../component/Icon";
import Screen from "../component/Screen";
import ListItem from "../component/item/ListItem";
import ListItemSeparator from "../component/item/ListItemSeparator";

const menuItems = [
  {
    title: "My lists",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colour.primary,
    },
  },
  {
    title: "My message",
    icon: {
      name: "email",
      backgroundColor: colour.secondary,
    },
    targetScreen: "Message",
  },
];

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Andrea"
          subTitle="andrea@gmail.com"
          image={require("../assets/user.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem title="Log Out" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colour.light },
  container: {
    marginVertical: 20,
  },
});
