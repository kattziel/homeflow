import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Messages = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>Messages</Text>
          </View>
        </View>

        <View style={styles.writeMessageContainer}>
          <TextInput style={styles.messageInput}>Write a message</TextInput>

          <Pressable style={styles.buttonView}>
              <Text style={styles.buttonText}>Send</Text>
          </Pressable>
        </View>

        <View style={styles.infoContainer}>
          <Text>No more data to display</Text>
        </View>
        <View style={styles.messagesContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderColor: "lightgray",
  },
  header: {
    fontSize: 22,
    color: "gray",
  },
  writeMessageContainer: {
    flexDirection: "row",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 10,
    borderBottomWidth: 0.3,
    borderColor: "lightgray",
    // backgroundColor: "blue"
  },
  messageInput: {
    flex: 4,
    backgroundColor: "white",
    height: "70%",
    marginHorizontal: 8,
    color: "lightgray",
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    marginRight: 8,
  },
  buttonView: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "darkgreen",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  buttonText: {
    fontSize: 16,
    color: "darkgreen",
    // opacity: 0.5,
  },
  infoContainer: {},
  messagesContainer: {},
});
