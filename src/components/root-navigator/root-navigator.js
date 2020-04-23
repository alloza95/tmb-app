import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { DrawerContent } from "../drawer-content";
import { ScreenStack } from "../screen-stack";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="screen-stack" component={ScreenStack} />
  </Drawer.Navigator>
);
