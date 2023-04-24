import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsTile = ({ imageName, title }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.container, styles.pressedContainer] : styles.container
      }
    >
      <View style={styles.imageContainer}>
        <Ionicons name={imageName} size={25} color="gray"></Ionicons>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Pressable>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="gray"
          ></Ionicons>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default SettingsTile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 5,
    margin: 10,
    flexDirection: "row",
    height: 50,
    width: "95%",
    alignItems: "center",
  },
  pressedContainer: {
    backgroundColor: "#ededed",
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
