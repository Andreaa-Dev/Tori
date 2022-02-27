import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../component/ListItem";
import ListItemDeleteAction from "../component/ListItemDeleteAction";
import ListItemSeparator from "../component/ListItemSeparator";
import Screen from "../component/Screen";

const messageList = [
  {
    id: 1,
    title: "t1",
    description: "1s",
    image: require("../assets/ma.jpeg"),
  },
  {
    id: 2,
    title: "t2",
    description: "2s",
    image: require("../assets/ma.jpeg"),
  },
];

function MessageScreen(props) {
  const [message, setMessage] = useState(messageList);
  const [refreshing, setRefreshing] = useState(false);

  const deleteMessageHandler = (item) => {
    const filteredMessage = message.filter((m) => item.id !== m.id);
    setMessage(filteredMessage);
  };

  return (
    <Screen>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("done", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => deleteMessageHandler(item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessage([
            {
              id: 2,
              title: "t2",
              description: "2s",
              image: require("../assets/ma.jpeg"),
            },
          ])
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessageScreen;
