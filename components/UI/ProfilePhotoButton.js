import { View, Text, StyleSheet, Pressable } from "react-native";

const ProfilePhotoButton = ({ children, onPress, color }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.view}>
        <Text style={[styles.text, (color = { color })]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default ProfilePhotoButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 120,
    borderColor: "lightgray"
  },
  text: { fontSize: 20, textAlign: "center" },
  pressed: {backgroundColor: "#D8D8D8"}
});
