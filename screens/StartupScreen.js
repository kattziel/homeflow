import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/UI/Button";

function StartupScreen() {
  const navigation = useNavigation();

  function loginButtonHandler() {
    navigation.navigate("Login");
  }

  function createFamilyButtonHandler() {
    navigation.navigate("Signup");
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.text}>to HomeFlow!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={loginButtonHandler}
          pressableStyle={styles.buttonPressableStyle}
          pressedStyle={styles.buttonPressedStyle}
          viewStyle={styles.buttonViewStyle}
          textStyle={styles.buttonTextStyle}
        >
          Log in
        </Button>
        <Button
          onPress={createFamilyButtonHandler}
          pressableStyle={styles.buttonPressableStyle}
          pressedStyle={styles.buttonPressedStyle}
          viewStyle={styles.buttonViewStyle}
          textStyle={styles.buttonTextStyle}
        >
          Create a family
        </Button>
      </View>
    </View>
  );
}

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    // only to show the background color
    justifyContent: "center",
  },
  textContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    color: "#615E58",
  },
  text: {
    fontSize: 25,
    color: "#615E58",
  },
  buttonPressableStyle: {},
  buttonPressedStyle: {},
  buttonViewStyle: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
  buttonTextStyle: {
    fontSize: 10,
    color: "black",
  },
});
