import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { useDispatch } from "react-redux";

import { startLogout } from "../actions/auth";

import { AuthContext } from "../contexts/AuthContext";

const Homee = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>HOME CLIENT</Text>
      <IconButton
        icon="logout"
        color={"black"}
        size={50}
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

export default Homee;