import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const [eneterdText, setEnteredText] = useState("");
  function goalInputHandler(enteredText: string) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    console.log("Button Press");
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your current goal"
        />
        <Button onPress={addGoalHandler} title="Add Goals" />
      </View>
      <Text>List of Goals ....</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    height: 40,
    padding: 10,
    marginRight: 10,
  },
});
export default Index;
