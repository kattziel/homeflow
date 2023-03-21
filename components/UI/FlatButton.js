import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/Colors";

function FlatButton({ onPress, children }) {
  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5
  }
});
