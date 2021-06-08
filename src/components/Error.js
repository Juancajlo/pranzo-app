import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

const Error = ({ error }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.text}>{error}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    color: "red",
    fontSize: 12,
  },
});

export default Error;
