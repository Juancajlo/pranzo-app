import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider, useSelector } from "react-redux";

import { store } from "./src/store/store";
import { AuthContext } from "./src/contexts/AuthContext";
import { useAuth } from "./src/hooks/useAuth";
import AuthStack from "./src/navigators/AuthStack";
import AdminStack from "./src/navigators/AdminStack";
import ClientStack from "./src/navigators/ClientStack";

const RootStack = createStackNavigator();

function App() {
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState("");
  /*const stateAdmin = useSelector((state) => state.isAdmin);*/
  //const stateToken = useSelector((state) => state.token);

  useEffect(() => {
    handleEffect();
  }, []);

  const handleEffect = async () => {
    const getToken = JSON.parse(await AsyncStorage.getItem("token"));
    const getAdmin = JSON.parse(await AsyncStorage.getItem("admin"));
    setToken(getToken);
    setAdmin(getAdmin);
    console.log(getToken);
    console.log(getAdmin);
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
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
