import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Messages</Text>
      </View>
      <View style={styles.writeMessageContainer}>
        <TextInput>Write a message</TextInput>
        <View style={styles.buttonContainer}>
            <Pressable>
                <View style={styles.buttonView}></View>
                <Text style={styles.buttonText}>Send</Text>
            </Pressable>
        </View>
        <View style={styles.infoContainer}>
            <Text>No more data to display</Text>
        </View>
        <View style={styles.messagesContainer}>

        </View>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {},
  header: {},
  writeMessageContainer: {},
  buttonContainer: {},
  buttonView: {},
  buttonText: {},
  infoContainer: {},
  messagesContainer: {}
});
