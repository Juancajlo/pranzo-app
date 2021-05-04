import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const FilledButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 14,
  },
});

export default FilledButton;
