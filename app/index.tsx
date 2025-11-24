import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export type Goal = {
  id: string;
  text: string;
};

const Index = () => {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoal() {
    setModalVisible(true);
  }

  function endAddGoal() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((current) => [
      ...current,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoal();
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((current) => current.filter((g) => g.id !== id));
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={{ marginBottom: 16 }}>
        <Button title="Add New Goal" onPress={startAddGoal} />
      </View>

      <GoalInput
        visible={modalVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoal}
      />

      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GoalItem item={item} onDelete={deleteGoalHandler} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
  },
});

export default Index;
