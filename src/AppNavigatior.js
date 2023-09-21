import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screen/Splash";
import Login from "./screen/Login";
import Register from "./screen/Register";
import Home from "./screen/Home";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
        //   options={{ headerShown: false }}
        //   name="Splash"
        //   component={Splash}
        // /> */}
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="MyAddress"
          component={MyAddress}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddAddress"
          component={AddAddress}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OrderSuccess"
          component={OrderSucess}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Orders"
          component={Orders}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
