import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./Tabs";
import Drawer from "./Drawer";
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";

const LoginWithTabs = () => {
    const Tab = createBottomTabNavigator()
    return (
      <Tab.Navigator>
        <Tab.Screen name="Settings" component={HomeScreen} />
        <Tab.Screen name="Third Page" component={SettingsScreen} />
      </Tab.Navigator>
    )
  }
  
  const MainDrawer = () => {
  
    return (
      <NavigationContainer >
        <Drawer.Navigator>
          <Drawer.Screen name="LoginWithTabs" component={LoginWithTabs} />
          <Drawer.Screen name="Second Page" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
    }

  export default MainDrawer;
