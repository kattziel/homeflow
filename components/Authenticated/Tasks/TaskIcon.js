import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TaskIcon = ({ subtitle, imageName, backgroundColor }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={[styles.circleContainer, backgroundColor={backgroundColor}]}>
          <View style={styles.imageContainer}>
            <Ionicons name={imageName} size={30} color="white"></Ionicons>
          </View>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default TaskIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 99999,
  },
  imageContainer: {},
  subtitleContainer: {
    marginTop: 6
  },
  subtitle: {
    color: "gray"
  },
  circleContainer: {
    padding: 15,
    borderRadius: 9999
  }
});
