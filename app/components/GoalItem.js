import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, index, onDelete }) => {
  return (
    <Pressable key={index} style={{ padding: 10 }} onPress={() => onDelete()}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalItem}>{item}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  goalContainer: { justifyContent: "center" },
  goalItem: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
export default GoalItem;
