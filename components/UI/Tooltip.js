import { View, Text, StyleSheet } from "react-native";
import { Colors } from '../../constants/Colors';

function Tooltip({text}) {
  return (
    <View style={styles.tooltipContainer}>
      <Text style={styles.tooltipText}>{text}</Text>
    </View>
  );
}

export default Tooltip;

const styles = StyleSheet.create({
  tooltipContainer: {
    backgroundColor: Colors.Yellow,
    // height: 30,
    padding: 10,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.Pink,
    opacity: 0.8
  },
  tooltipText: {
    color: Colors.Pink,
    fontSize: 12,
  },
});

// draft of tooltip
