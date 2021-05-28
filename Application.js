import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";

import AuthStack from "./src/navigators/AuthStack";
import AdminTab from "./src/navigators/AdminTab";
import ClientTab from "./src/navigators/ClientTab";

const RootStack = createStackNavigator();

function Application() {
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState("");
  const stateUser = useSelector((state) => state.auth);

  useEffect(() => {
    handleEffect();
  }, [stateUser]);

  const handleEffect = async () => {
    setToken(JSON.parse(await AsyncStorage.getItem("token")));
    setAdmin(JSON.parse(await AsyncStorage.getItem("admin")));
  };

  const renderScreens = () => {
    return token ? (
      admin ? (
        <RootStack.Screen name={"AdminStack"}>
          {() => <AdminTab />}
        </RootStack.Screen>
      ) : (
        <RootStack.Screen name={"ClientStack"}>
          {() => <ClientTab />}
        </RootStack.Screen>
      )
    ) : (
      <RootStack.Screen name={"AuthStack"}>
        {() => <AuthStack />}
      </RootStack.Screen>
    );
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {renderScreens()}
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default Application;
