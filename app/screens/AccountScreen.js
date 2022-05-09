import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import colour from "../config/colour";
import Icon from "../component/Icon";
import Screen from "../component/Screen";
import ListItem from "../component/item/ListItem";
import ListItemSeparator from "../component/item/ListItemSeparator";
import routes from "../navigation/routes";
import AuthContext from "../auth/Context";
import { set } from "react-native-reanimated";

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
    targetScreen: routes.MESSAGE,
  },
];

export default function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/user.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
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
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => setUser(null)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colour.light },
  container: {
    marginVertical: 20,
  },
});
