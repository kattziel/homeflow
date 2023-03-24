import { View, Text, StyleSheet } from "react-native";

function ChatScreen() {
  return (
    <View>
      <Text style={styles.text}>ChatScreen</Text>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 25,
  },
});
