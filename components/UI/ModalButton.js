import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ModalButton(props) {
  const navigation = useNavigation();
  function okResetHandler() {
    props.setIsReset(false);
    navigation.navigate("NewLoginScreen");
  }
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.buttonContainer, styles.pressed]
          : styles.buttonContainer
      }
      onPress={okResetHandler}
    >
      <View style={styles.viewStyle}>
        <Text
          style={({ pressed }) => [
            styles.textStyle,
            pressed && styles.pressedText,
          ]}
        >
          OK
        </Text>
      </View>
    </Pressable>
  );
}

export default ModalButton;

const styles = StyleSheet.create({
  pressableButton: {},
  buttonContainer: {},
  viewStyle: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  textStyle: {
    color: "gray",
    textAlign: "center",
    fontSize: 20,
  },
  pressed: {
    backgroundColor: "lightgray",
    opacity: 0.5,
  },
  //   pressedText: {
  //     color: "white",
  //   },
});
