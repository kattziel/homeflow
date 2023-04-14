import { View, Text, Pressable, StyleSheet } from "react-native";

function Button({ onPress, children, disabled, backgroundColor }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  pressableButton: {
    alignItems: "center",
  },
  buttonContainer: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    width: "46%",
  },
  viewStyle: {
    paddingVertical: 5
  },
  textStyle: {
    color: "gray",
    textAlign: "center",
    fontSize: 20,
  },
  disabled: {
    opacity: 0.3,
  },
});
