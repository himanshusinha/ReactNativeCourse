import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { Goal } from "../index";
type Props = {
  item: Goal;
  index?: number;
  onDelete: (id: string) => void;
};

const GoalItem: React.FC<Props> = ({ item, index, onDelete }) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDelete(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(GoalItem);

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 6,
    borderRadius: 6,
    overflow: "hidden",
  },
  goalText: {
    padding: 10,
    backgroundColor: "#5e0acc",
    color: "white",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.6,
  },
});
