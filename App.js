import { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

import * as native from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

import AuthContextProvider, { AuthContext } from "./store/auth-context";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ResetPassword from "./screens/ResetPassword";

import CalendarScreen from "./screens/BottomTabScreens/CalendarScreen";
import FamilyScreen from "./screens/BottomTabScreens/FamilyScreen";
import GroceriesScreen from "./screens/BottomTabScreens/GroceriesScreen";
import ChatScreen from "./screens/BottomTabScreens/RewardsScreen";
import TasksScreen from "./screens/BottomTabScreens/TasksScreen";
import StartupScreen from "./screens/StartupScreen";
import CreateProfile from "./screens/CreateProfile";
import AddFamilyMembersScreen from "./screens/AddFamilyMembersScreen";
import EditFamilyMemberProfile from "./screens/EditFamilyMemberProfile";
import AddFamilyMemberScreen from "./screens/AddFamilyMemberScreen";

import Settings from "./components/Authenticated/Settings/Settings";
import TaskCategories from "./components/Authenticated/Tasks/TaskCategories";
import Messages from "./components/Authenticated/Messages/Messages";

// import Wrapper from "./components/Wrapper";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.lightGreen },
        // backgroundColor of the header
        headerTintColor: "white",
        // color of the header title
        tabBarStyle: { backgroundColor: Colors.lightGreen },
        // background Color for the bottom tab
        tabBarActiveTintColor: Colors.Pink,
      }}
    >
      <BottomTab.Screen
        name="FamilyScreen"
        component={FamilyScreen}
        options={{
          title: "Family Chores",
          tabBarLabel: "Family",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          title: "Calendar",
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TasksScreen"
        component={TasksScreen}
        options={{
          title: "Tasks List",
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alarm" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: "Chat",
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="GroceriesScreen"
        component={GroceriesScreen}
        options={{
          title: "Groceries List",
          tabBarLabel: "Groceries",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-basket" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartupScreen" component={StartupScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="TaskCategories" component={TaskCategories} />
      <Stack.Screen name="CreateProfile" component={CreateProfile} />
      <Stack.Screen
        name="AddFamilyMembersScreen"
        component={AddFamilyMembersScreen}
      />
      <Stack.Screen
        name="EditFamilyMemberProfile"
        component={EditFamilyMemberProfile}
      />
      <Stack.Screen
        name="AddFamilyMemberScreen"
        component={AddFamilyMemberScreen}
      />
      <Stack.Screen
        name="BottomOverview"
        component={BottomOverview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <native.NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </native.NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);
  if (isTryingLogin) {
    <AppLoading />;
  }
  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
