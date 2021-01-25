import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationStack from "./routes/navigation";
import DrawerNavigator from "./routes/Drawer";
import Tabs from './routes/Tabs'



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      {/* <Tabs /> */}
      {/* <NavigationStack /> */}
      <DrawerNavigator />
    </>
  );
}
