import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

import { AuthContext } from "./src/contexts/AuthContext";
import { useAuth } from "./src/hooks/useAuth";
import AuthStack from "./src/navigators/AuthStack";
import AdminStack from "./src/navigators/AdminStack";
import ClientStack from "./src/navigators/ClientStack";

const RootStack = createStackNavigator();

function App() {
  const { userData, registerUser, loginUser, userLogout } = useAuth();

  const renderScreens = () => {
    return userData.token ? (
      userData.isAdmin ? (
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
    <AuthContext.Provider
      value={{ userData, registerUser, loginUser, userLogout }}
    >
      <PaperProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}

export default App;
