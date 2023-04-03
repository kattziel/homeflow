import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

function ErrorModal() {
  const [errorModalIsVisible, setErrorModalIsVisible] = useState(true);

  function quitErrorModal() {
    setErrorModalIsVisible(false);
  }

  return (
    errorModalIsVisible && (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.exitButtonContainer}>
            <Pressable>
              <Ionicons
                name={"close-outline"}
                size={25}
                color="gray"
                onPress={quitErrorModal}
              ></Ionicons>
            </Pressable>
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Error</Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Ooops, that appears incorrect ..</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Are you sure you typed it correctly or could it be another
              password? Why not give it another go? If you can't remember it,
              ask your family for shared family password or - if you've set a
              personal password - you can reset it by tapping "I forgot my
              password" button below.
            </Text>
          </View>
        </View>
      </View>
    )
  );
}

export default ErrorModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    borderRadius: "7",
    padding: 10,
    width: "90%",
  },
  exitButtonContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  errorContainer: {
    backgroundColor: "#E0115F",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: "30%",
    marginBottom: 10,
  },
  errorText: {},
  headerContainer: {
    paddingBottom: 20,
  },
  header: {
    fontSize: 18,
  },
  textContainer: {},
  text: {},
});
