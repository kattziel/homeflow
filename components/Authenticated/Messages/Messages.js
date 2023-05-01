import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Messages = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Messages</Text>
        </View>
        <View style={styles.writeMessageContainer}>
          <TextInput style={styles.messageInput}>Write a message</TextInput>
          <View style={styles.buttonContainer}>
            <Pressable>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Send</Text>
              </View>
            </Pressable>
          </View>
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
  },
  headerContainer: {
    // borderWidth: 2,
    // borderColor: "blue",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    // borderWidth: 2,
    // borderColor: "red",
    fontSize: 22,
    color: "gray",
  },
  writeMessageContainer: {
    flexDirection: "row",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
  },
  messageInput: {
    flex: 4,
    backgroundColor: "lightgray",
    height: "70%",
    marginHorizontal: 8,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  buttonView: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {},
  infoContainer: {},
  messagesContainer: {},
});
