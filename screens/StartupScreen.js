import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StartScreenButton from "../components/UI/StartScreenButton";

function StartupScreen() {
  const navigation = useNavigation();

  function loginButtonHandler() {
    navigation.navigate("LoginScreen");
  }

  function signupButtonHandler() {
    navigation.navigate("SignupScreen");
  }

  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.text}>
            to <Text style={styles.innerText1}>Home</Text>
            <Text style={styles.innerText2}>Flow!</Text>
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <StartScreenButton onPress={loginButtonHandler} color="#91bfdb">
            Log in
          </StartScreenButton>
          <StartScreenButton onPress={signupButtonHandler} color="#d391b3">
            Sign up
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
  innerText1: {
    color: "#91bfdb",
  },
  innerText2: {
    color: "#d391b3",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
