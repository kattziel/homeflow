import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ModalButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
      onPress={() => {
        setIsReset(false);
        navigation.navigate("NewLoginScreen");
      }}
    >
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>OK</Text>
      </View>
    </Pressable>
  );
}

export default ModalButton;

const styles = StyleSheet.create({
  pressableButton: {},
  buttonContainer: {
  },
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
    borderColor: "white"
  }
});
