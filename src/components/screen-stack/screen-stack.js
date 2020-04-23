import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  HomeScreen,
  Linies,
  ParadesPreferides,
  SobreApp,
  TitolsPreus,
} from "../../screens";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="parades-preferides"
        component={ParadesPreferides}
        options={{ title: "Parades preferides" }}
      />
      <Stack.Screen
        name="linies"
        component={Linies}
        options={{ title: "Línies" }}
      />
      <Stack.Screen
        name="titols-preus"
        component={TitolsPreus}
        options={{ title: "Títols i preus" }}
      />
      <Stack.Screen
        name="sobre-app"
        component={SobreApp}
        options={{ title: "Sobre l’app" }}
      />
    </Stack.Navigator>
  );
};
