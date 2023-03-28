import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";

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
        <Text style={styles.text}>Welcome to HomeFlow!</Text>
      </View>
      {/* <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/family.png")}
        ></Image>
      </View> */}
      <View>
        <Button style={styles.button} onPress={loginButtonHandler}>
          Log in
        </Button>
        <Button style={styles.button} onPress={createFamilyButtonHandler}>
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
    flex: 1
  },
  textContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: Colors.Pink,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
