import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";

import AuthStack from "./src/navigators/AuthStack";
import AdminStack from "./src/navigators/AdminStack";
import ClientStack from "./src/navigators/ClientStack";

const RootStack = createStackNavigator();

function Application() {
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState("");
  const stateToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    handleEffect();
  }, [stateToken]);

  const handleEffect = async () => {
    setToken(JSON.parse(await AsyncStorage.getItem("token")));
    setAdmin(JSON.parse(await AsyncStorage.getItem("admin")));
  };
  const renderScreens = () => {
    return token ? (
      admin ? (
        <RootStack.Screen name={"AdminStack"}>
          {() => <AdminStack />}
        </RootStack.Screen>
      ) : (
        <RootStack.Screen name={"ClientStack"}>
          {() => <ClientStack />}
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
