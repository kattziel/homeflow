import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsTile = ({ imageName, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Ionicons name={imageName} size={25} color="gray"></Ionicons>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Pressable>
          <Ionicons name="chevron-forward-outline" size={20} color="gray"></Ionicons>
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsTile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    margin: 10,
    flexDirection: "row",
    height: 50,
    width: "95%",
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 5,
  },
  title: {
    color: "gray",
    // fontSize: 28
  },
  arrowContainer: {
    flex: 1,
  },
});
