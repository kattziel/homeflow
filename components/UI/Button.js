import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/Colors";

function Button({ onPress, children }) {
  return (
    <Pressable style={({pressed}) => [styles.pressableButton, pressed && styles.pressed]} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  pressableButton: {
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 35,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 22,
    color: "black"
  }
  // buttonContainer: {
  //   alignItems: "center",
  //   backgroundColor: Colors.Yellow,
  //   borderRadius: 4,
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   marginVertical: 15,
  // }
});
