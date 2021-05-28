import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MenuClient from "../screens/client/MenuClient";
import OrdersClient from "../screens/client/OrdersClient";
import CartClient from "../screens/client/CartClient";

const ClientTab = createBottomTabNavigator();

const ClientTabNavigator = () => {
  return (
    <ClientTab.Navigator>
      <ClientTab.Screen name="MenuClient" component={MenuClient} />
      <ClientTab.Screen name="OrdersClient" component={OrdersClient} />
      <ClientTab.Screen name="CartClient" component={CartClient} />
    </ClientTab.Navigator>
  );
};

export default ClientTabNavigator;
