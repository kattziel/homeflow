import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Message = ({ date, message, person }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.senderContainer}>
          <Ionicons name="happy-outline" size={28} color="pink"></Ionicons>
          <Text style={styles.senderText}>You</Text>
        </View>

        <View style={styles.messageContainer}>
          <View style={styles.messageView}>
            <Text style={styles.messageText}>Testing chat</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.date}>16:10</Text>
          </View>
        </View>

        <View style={styles.deleteMessageContainer}>
          <Pressable>
            <Ionicons name="close-outline" size={16}></Ionicons>
          </Pressable>
        </View>
      </View>

      <View style={styles.feedbackContainer}>
        <Pressable style={styles.feedbackView}>
          <Ionicons name="heart" size={20} color="lightgray"></Ionicons>
          <Text style={styles.feedbackText}>Like</Text>
        </Pressable>

        <Pressable style={styles.feedbackView}>
          <Ionicons name="chatbubble" size={20} color="lightgray"></Ionicons>
          <Text style={styles.feedbackText}>Comment</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  contentContainer: {
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderColor: "lightgray",
    paddingBottom: 10,
  },
  senderContainer: {
    flex: 2,
    paddingVertical: 10,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",

  },
  senderText: {
    color: "gray",
  },
  messageContainer: {
    flex: 6,
    justifyContent: "space-around",
  },
  messageText: {
    fontSize: 20,
    color: "gray",
  },
  date: {
    fontSize: 15,
    color: "gray",
  },
  deleteMessageContainer: {
    flex: 1,
    paddingRight: 8,
    paddingTop: 4,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  feedbackContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  feedbackView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  feedbackText: {
    color: "lightgray",
    paddingHorizontal: 4,
  },
});
