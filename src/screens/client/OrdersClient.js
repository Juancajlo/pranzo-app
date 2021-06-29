import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { IconButton, Title, Card, Button, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

import { startLogout } from "../../actions/auth";
import { cartLogout } from "../../actions/cart";
import { palidGreen, normalGray, normalGreen } from "../../utils/colors";

const OrdersClient = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.headerFontView}>
          <Title style={styles.headerFont}>Pedidos</Title>
        </View>
        <View style={styles.iconView}>
          <IconButton
            icon="logout-variant"
            color={normalGreen}
            size={35}
            onPress={() => {
              dispatch(startLogout());
              dispatch(cartLogout());
            }}
          />
        </View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <Card style={styles.cardContainer}>
          <Card.Content style={styles.cardTitleContent}>
            <Title
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 21,
              }}
            >
              No tienes pedidos pendientes
            </Title>
            <Title
              style={{ alignSelf: "center", fontSize: 19, marginBottom: 5 }}
            >
              ¿Deseas realizar un pedido?
            </Title>
            <Button
              style={{
                ...styles.button,
                backgroundColor: palidGreen,
                marginVertical: 10,
              }}
              onPress={() => {
                navigation.navigate("Menú");
              }}
              mode="contained"
            >
              <Text style={styles.buttonText}>empezar pedido</Text>
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerView: {
    marginVertical: 20,
    flexDirection: "row",
  },
  headerFontView: {
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerFont: {
    fontSize: 30,
    marginLeft: 10,
  },
  iconView: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  cardContainer: {
    margin: 10,
  },
  cardTitleContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
});

export default OrdersClient;
