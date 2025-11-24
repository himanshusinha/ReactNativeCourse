import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type GoalInputProps = {
  onAddGoal: (text: string) => void;
  visible: boolean;
  onCancel: () => void;
};

const GoalInput: React.FC<GoalInputProps> = ({
  onAddGoal,
  visible,
  onCancel,
}) => {
  const [entered, setEntered] = useState<string>("");

  function addGoal() {
    const trimmed = entered.trim();
    if (!trimmed) {
      Alert.alert("Empty goal", "Please enter a goal before adding.");
      return;
    }
    onAddGoal(trimmed);
    setEntered("");
  }

  function cancel() {
    setEntered("");
    onCancel();
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.backdrop}>
          <KeyboardAvoidingView
            behavior={Platform.select({ ios: "padding", android: undefined })}
            style={styles.avoiding}
          >
            <View style={styles.innerWrap}>
              <Image
                style={styles.image}
                source={require("../../assets/images/goal.png")}
              />
              <TextInput
                value={entered}
                onChangeText={setEntered}
                placeholder="New goal"
                placeholderTextColor="#ddd"
                style={styles.input}
                returnKeyType="done"
                onSubmitEditing={addGoal}
                autoFocus
              />

              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Pressable onPress={addGoal}>
                    <Text style={styles.buttonText}> Add</Text>
                  </Pressable>
                </View>
                <View style={styles.button}>
                  <Pressable onPress={cancel}>
                    <Text style={styles.buttonText}> Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 0,
    backgroundColor: "#311b6b",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  avoiding: {
    width: "100%",
  },
  innerWrap: {
    width: "100%",
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 12,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: 8,
    minWidth: 90,
    backgroundColor: "#5e0acc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    padding: 10,
  },
});
