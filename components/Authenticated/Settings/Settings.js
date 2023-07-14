import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import SettingsTile from "./SettingsTile";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";

const Settings = () => {
  const authCtx = useContext(AuthContext);

  const onLogoutHandler = () => {
    authCtx.logout();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Settings</Text>
        </View>
        <View style={styles.settingsContainer}>
          <SettingsTile imageName="person" title="My account" />
          <SettingsTile imageName="home" title="Household" />
          <SettingsTile imageName="checkmark-outline" title="Permissions" />
          <SettingsTile
            imageName="chatbox-ellipses-outline"
            title="Help center"
          />
          <SettingsTile imageName="bulb-outline" title="Feedback" />
          <SettingsTile imageName="share-social-outline" title="Share" />
          <SettingsTile
            onPress={onLogoutHandler}
            imageName="log-out-outline"
            title="Log out"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeAreaView: {
    margin: 5,
  },
  container: {},
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  header: { fontSize: 25, color: "gray" },
});
