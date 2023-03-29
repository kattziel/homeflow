import { View, Pressable, Text, StyleSheet } from "react-native";

function StartScreenButton({ onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.buttonContainer, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default StartScreenButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgray",
    borderWidth: 2,
    paddingVertical: 25,
    width: "100%",
    marginBottom: 20,
  },
  pressed: {
    opacity: 0.75
  },
  viewStyle: {},
  textStyle: {
    fontSize: 18,
    color: "gray"
  },
});
