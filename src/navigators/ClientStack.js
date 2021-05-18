import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Homee from "../screens/Homee";

const ClientStack = createStackNavigator();

const ClientStackNavigator = () => {
  return (
    <ClientStack.Navigator screenOptions={{ headerShown: false }}>
      <ClientStack.Screen name="Home" component={Homee} />
    </ClientStack.Navigator>
  );
};

export default ClientStackNavigator;
