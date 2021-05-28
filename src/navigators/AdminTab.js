import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MenuAdmin from "../screens/admin/MenuAdmin";
import ManageAdmin from "../screens/admin/ManageAdmin";
import AccountsAdmin from "../screens/admin/AccountsAdmin";

const AdminTab = createBottomTabNavigator();

const AdminTabNavigator = () => {
  return (
    <AdminTab.Navigator>
      <AdminTab.Screen name="MenuAdmin" component={MenuAdmin} />
      <AdminTab.Screen name="ManageAdmin" component={ManageAdmin} />
      <AdminTab.Screen name="AccountsAdmin" component={AccountsAdmin} />
    </AdminTab.Navigator>
  );
};

export default AdminTabNavigator;
