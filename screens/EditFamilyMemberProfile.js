import { View, Text, Image, Input } from "react-native";
import Button from "../components/UI/Button";

function EditFamilyMemberProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Add family member</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Image></Image>
          <Input></Input>
        </View>
        <View style={styles.inputContainer}>
          <Image></Image>
          <Input></Input>
        </View>
        <View style={styles.inputContainer}>
          <Image></Image>
          <Input></Input>
        </View>
        <View style={styles.inputContainer}>
          <Image></Image>
          <Input></Input>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </View>
    </View>
  );
}

export default EditFamilyMemberProfile;

const styles = StyleSheet.create({
    container: {},
    header: {},
    inputsContainer: {},
    inputContainer: {},
    buttonsContainer: {}
});
