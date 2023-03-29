import { View, Text, Pressable } from "react-native";

function Button({ onPress, children, pressableStyle, pressedStyle, viewStyle, textStyle }) {
  return (
    <Pressable style={({pressed}) => [pressableStyle, pressed && pressedStyle]} onPress={onPress}>
      <View style={viewStyle}>
        <Text style={textStyle}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

// const styles = StyleSheet.create({
//   pressableButton: {
//     // alignItems: 'center',
//   },
//   buttonContainer: {
//     flex: 1,
//     borderColor: 'black',
//     borderWidth: 1,
//     margin: 10,
//     paddingHorizontal: 35,
//     paddingVertical: 10
//   },
//   buttonText: {
//     fontSize: 300,
//     color: "black"
//   }
//   // buttonContainer: {
//   //   alignItems: "center",
//   //   backgroundColor: Colors.Yellow,
//   //   borderRadius: 4,
//   //   paddingVertical: 10,
//   //   paddingHorizontal: 20,
//   //   marginVertical: 15,
//   // }
// });
