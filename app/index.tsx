import { Button, StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dummyText}>
        <Text>Another piece of text !</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Tap me!" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderColor: "blue",
    borderWidth: 2,
  },
});
export default Index;
