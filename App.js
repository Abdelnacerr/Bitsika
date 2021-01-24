import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Screens/HomeScreen";
import AddButton from "./Screens/AddButton";
import SettingsScreen from "./Screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
      <HomeScreen />
      {/* <AddButton /> */}
    </>
  );
}
