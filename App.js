import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { AuthContext } from "./src/contexts/AuthContext";
import { useAuth } from "./src/hooks/useAuth";
import AuthStack from "./src/navigators/AuthStack";

function App() {
  const { userData, registerUser, loginUser, userLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ userData, registerUser, loginUser, userLogout }}
    >
      <PaperProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}

export default App;
