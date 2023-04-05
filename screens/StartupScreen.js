import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StartScreenButton from "../components/UI/StartScreenButton";
import Button from "../components/UI/Button";

function StartupScreen() {
  const navigation = useNavigation();

  function loginButtonHandler() {
    navigation.navigate("NewLoginScreen");
  }

  function createFamilyButtonHandler() {
    navigation.replace("SignupCreateFamily");
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.text}>to HomeFlow!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StartScreenButton onPress={loginButtonHandler} color="#91bfdb">
          Log in
        </StartScreenButton>
        <StartScreenButton onPress={createFamilyButtonHandler} color="#d391b3">
          Create family
        </StartScreenButton>
      </View>
    </View>
  );
}

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    // only to show the background color
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
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
    justifyContent: "center",
    alignItems: "center",
  },
});
