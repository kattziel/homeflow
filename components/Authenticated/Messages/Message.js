import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Message = ({ date, message, person }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.senderContainer}>
          <Ionicons name="mail" size={28}></Ionicons>
          <Text>You</Text>
        </View>
        <View>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <View style={styles.deleteMessage}>
          <Pressable>
            <Ionicons name="exit" size={28}></Ionicons>
          </Pressable>
        </View>
      </View>

      <View style={styles.feedbackContainer}>
        <Pressable>
          <View style={styles.feedbackView}>
            <Ionicons name="love" size={20}></Ionicons>
            <Text style={styles.feedbackLike}>Like</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.feedbackView}>
            <Ionicons name="chat" size={20}></Ionicons>
            <Text style={styles.feedbackComment}>Comment</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
