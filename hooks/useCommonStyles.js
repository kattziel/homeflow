import { StyleSheet } from "react-native";

export default function () {
  const commonStyles = StyleSheet.create({
    flexFill: { flex: 1 },
    row: { flexDirection: "row" },
    rowCenter: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    rowHCenter: { flexDirection: "row", alignItems: "center" },
    textCenter: { textAlign: "center" },
    rowSpaceBeetween: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  return commonStyles;
}
