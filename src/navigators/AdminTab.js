import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { normalGray, palidGreen } from "../utils/colors";
import MenuAdmin from "../screens/admin/MenuAdmin";
import ManageAdmin from "../screens/admin/ManageAdmin";
import AccountsAdmin from "../screens/admin/AccountsAdmin";

const AdminTab = createMaterialBottomTabNavigator();

const AdminTabNavigator = () => {
  return (
    <AdminTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          let size = 23;
          if (route.name === "Menú") {
            iconName = "grid-outline";
          } else if (route.name === "Administrar") {
            iconName = "stats-chart-outline";
          } else if (route.name === "Cuentas") {
            iconName = "key-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      barStyle={{ backgroundColor: normalGray }}
      activeColor={palidGreen}
      shifting={true}
      labeled={true}
    >
      <AdminTab.Screen name="Menú" component={MenuAdmin} />
      <AdminTab.Screen name="Administrar" component={ManageAdmin} />
      <AdminTab.Screen name="Cuentas" component={AccountsAdmin} />
    </AdminTab.Navigator>
  );
};

export default AdminTabNavigator;
