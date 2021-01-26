import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import Tabs from "../routes/Tabs";
import SettingsScreen from "../Screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="settings"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="settings"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
