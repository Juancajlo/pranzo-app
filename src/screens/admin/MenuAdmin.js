import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { useDispatch } from "react-redux";

import { login, startLogout } from "../../actions/auth";

const MenuAdmin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    handleRedux();
  }, []);

  const handleRedux = async () => {
    const user = await JSON.parse(await AsyncStorage.getItem("user"));
    if (user) {
      dispatch(login(user.id, user.firstName, user.lastName, user.isAdmin));
    }
  };

  return (
    <View style={styles.container}>
      <Text>HOME ADMIN</Text>
      <IconButton
        icon="logout"
        color={"black"}
        size={60}
        onPress={() => dispatch(startLogout())}
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

export default MenuAdmin;
