import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";

const Loading = ({ loading, display, color }) => {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="small" color={color} />
        <Text style={styles.text}>{display}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    borderRadius: 20,
  },
  text: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "500",
  },
});

export default Loading;
