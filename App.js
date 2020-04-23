import { NavigatorContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { HomeScreen } from "./screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigatorContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigatorContainer>
  );
}
