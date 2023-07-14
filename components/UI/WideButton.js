import { ActivityIndicator } from "react-native";
import { View, Pressable, Text, StyleSheet } from "react-native";

function WideButton({ onPress, children, color, loading = false }) {
  const borderColor = color;
  const fontColor = color;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
        { borderColor },
      ]}
    >
      <View style={styles.viewStyle}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.textStyle, { color: fontColor }]}>
            {children}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

export default WideButton;

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
    opacity: 0.75,
  },
  viewStyle: {},
  textStyle: {
    fontSize: 18,
    color: "red",
  },
});
