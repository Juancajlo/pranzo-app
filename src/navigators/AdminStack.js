import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

const AdminStack = createStackNavigator();

const AdminStackNavigator = () => {
  return (
    <AdminStack.Navigator screenOptions={{ headerShown: false }}>
      <AdminStack.Screen name="Home" component={Home} />
    </AdminStack.Navigator>
  );
};

export default AdminStackNavigator;
