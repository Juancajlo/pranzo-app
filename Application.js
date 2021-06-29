import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { login } from "./src/actions/auth";
import AuthStack from "./src/navigators/AuthStack";
import AdminTab from "./src/navigators/AdminTab";
import ClientTab from "./src/navigators/ClientTab";

const RootStack = createStackNavigator();

function Application() {
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.auth);

  useEffect(() => {
    handleEffect();
  }, []);

  const handleEffect = async () => {
    const user = await JSON.parse(await AsyncStorage.getItem("user"));
    if (user) {
      dispatch(login(user.id, user.firstName, user.lastName, user.isAdmin));
    }
  };

  const renderScreens = () => {
    return stateUser.id ? (
      stateUser.isAdmin ? (
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
