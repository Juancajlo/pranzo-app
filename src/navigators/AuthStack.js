import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Presentation from "../screens/Presentation";
import Register from "../screens/Register";
import Login from "../screens/Login";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={"Presentation"} component={Presentation} />
      <AuthStack.Screen name={"Register"} component={Register} />
      <AuthStack.Screen name={"Login"} component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
