import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { normalGray } from "../utils/colors";
import MenuClient from "../screens/client/MenuClient";
import OrdersClient from "../screens/client/OrdersClient";
import CartClient from "../screens/client/CartClient";

const ClientTab = createMaterialBottomTabNavigator();

const ClientTabNavigator = () => {
  return (
    <ClientTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          let size = 23;
          if (route.name === "Menú") {
            iconName = "grid-outline";
          } else if (route.name === "Órdenes") {
            iconName = "stats-chart-outline";
          } else if (route.name === "Pedido") {
            iconName = "cart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      barStyle={{ backgroundColor: normalGray }}
      activeColor={palidGreen}
      shifting={true}
      labeled={true}
    >
      <ClientTab.Screen name="Menú" component={MenuClient} />
      <ClientTab.Screen name="Órdenes" component={OrdersClient} />
      <ClientTab.Screen name="Pedido" component={CartClient} />
    </ClientTab.Navigator>
  );
};

export default ClientTabNavigator;
