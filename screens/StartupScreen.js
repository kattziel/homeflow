import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StartScreenButton from "../components/UI/StartScreenButton";

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
        <StartScreenButton onPress={loginButtonHandler}>
          Log in
        </StartScreenButton>
        <StartScreenButton onPress={createFamilyButtonHandler}>
          Create a family
        </StartScreenButton>
      </View>
    </View>
  );
}

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    // only to show the background color
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3
  },
  header: {
    fontSize: 30,
    color: "#615E58",
  },
  text: {
    fontSize: 25,
    color: "#615E58",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  }
});
