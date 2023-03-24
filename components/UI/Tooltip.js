import { View, Text, StyleSheet } from "react-native";

function Tooltip({position, text}) {
    return (
        <View style={styles.tooltip(position.x, position.y)}>
            <Text>{text}</Text>
        </View>
    );
}

export default Tooltip;

const styles = StyleSheet.create({
    tooltip: (x, y) => ({
        position: "absolute",
        left: x,
        top: y
    }),
});

// draft of tooltip