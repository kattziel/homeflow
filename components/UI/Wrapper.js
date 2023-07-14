import { View, StyleSheet } from "react-native";

function Wrapper({children}) {
  return <View>{children}</View>;
}

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
