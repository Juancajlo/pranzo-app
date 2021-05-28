import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { IconButton, Title, Button, Text } from "react-native-paper";

import { startLogout } from "../../actions/auth";

const AccountsAdmin = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Title>ACCOUNTS ADMIN</Title>
      <IconButton
        icon="logout"
        color={"black"}
        size={60}
        onPress={() => dispatch(startLogout())}
      />
      <Button style={styles.button} onPress={() => {}} mode="contained">
        <Text style={styles.buttonText}>crear cuenta</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default AccountsAdmin;
