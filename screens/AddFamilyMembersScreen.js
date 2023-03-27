import { View, Text, StyleSheet, Pressable } from "react-native";

import Button from "../components/UI/Button";

import FamilyMember from "../components/Family/FamilyMember";

function AddFamilyMembersScreen() {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Add Family Members</Text>
        <Text style={styles.text}>
          This will allow everyone to stay connected and up to date.
        </Text>
      </View>
      <View style={styles.familyMemberSummaryContainer}>
        <FamilyMember />
      </View>
      <View style={styles.addButtonContainer}>
        <Pressable style={styles.addButton}>
          <Text>Add button</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default AddFamilyMembersScreen;

const styles = StyleSheet.create({
  textContainer: {},
  textHeader: {},
  text: {},
  familyMemberSummaryContainer: {},
  addButtonContainer: {},
  addButton: {},
});
