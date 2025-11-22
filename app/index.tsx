import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const Index = () => {
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }
  function onDeleteGoalHandler() {
    console.log("On Delete");
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <GoalItem
              item={item}
              index={index}
              onDelete={onDeleteGoalHandler}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
  },
});

export default Index;
