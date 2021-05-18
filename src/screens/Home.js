import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { userLogout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>HOME ADMIN</Text>
      <IconButton
        icon="logout"
        color={"black"}
        size={60}
        onPress={() => userLogout()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Home;
