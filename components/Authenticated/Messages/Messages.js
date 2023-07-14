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
import Message from "./Message";

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

        <View style={styles.dateContainer}>
          <Text style={styles.date}> TUE 25 APR </Text>
        </View>

        <View style={styles.messagesContainer}>
          <Message />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoContainerText}>No more data to display</Text>
        </View>
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
    height: "10%",
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
    height: "10%",
    justifyContent: "center",
    borderBottomWidth: 0.3,
    borderColor: "#bababa",
    paddingTop: 10,
    paddingBottom: 10,
  },
  messageInput: {
    flex: 1,
    backgroundColor: "white",
    // height: "70%",
    marginHorizontal: 8,
    color: "lightgray",
    fontSize: 18,
  },
  buttonView: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "darkgreen",
    opacity: 0.3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    color: "darkgreen",
  },
  dateContainer: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed",
  },
  date: {
    color: "#9c9b9bff",
    fontSize: 16,
  },
  infoContainer: {
    borderTopWidth: 1,
    borderColor: "#bababa",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoContainerText: {
    color: "gray",
    fontSize: 16,
  },
  messagesContainer: {
    paddingVertical: 15,
  },
});
