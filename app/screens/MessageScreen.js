import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import ListItem from "../component/ListItem";

const message = [
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
  return (
    <SafeAreaView>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default MessageScreen;
