import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import AppText from "AppText";
import Screen from "./Screen";
import defaultStyle from "../config/style";
import PickItem from "./PickItem";

export default function AppPicker({ icon, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <AppText style={styles.text}>{placeholder}</AppText>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyle.colour.medium}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={item}
            keyExtractor={(item) => item.value.toString()}
            renderItem={() => <PickItem />}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colour.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
});
