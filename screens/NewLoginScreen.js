import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import FlatButton from "../components/UI/FlatButton";
import StartScreenButton from "../components/UI/StartScreenButton";
import Input from "../components/UI/Input";

function NewLoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Your account</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input />
          <Input />
        </View>
        <View style={styles.buttonContainer}>
          <StartScreenButton color="#91bfdb">Log in</StartScreenButton>
        </View>
        <View style={styles.flatButtonsContainer}>
          <FlatButton style={styles.flatButton}>Reset password</FlatButton>
          <FlatButton style={styles.flatButton}>Create family</FlatButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NewLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  titleContainer: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  inputsContainer: {
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  flatButtonsContainer: {
    alignItems: "center",
  },
  flatButton: {},
});
