import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screen/Splash";
import Login from "./screen/Login";
import Register from "./screen/Register";

const Stack = createStackNavigator();

const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShow: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShow: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShow: false }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatior;
