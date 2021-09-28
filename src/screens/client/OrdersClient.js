import React from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { IconButton, Title, Card, Button, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

import { styles } from "../../styles/client/OrdersClient";
import { startLogout } from "../../actions/auth";
import { cartLogout } from "../../actions/cart";
import { palidGreen } from "../../utils/colors";

const OrdersClient = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/pranzo.png")}
        style={styles.image}
      >
        <View style={styles.headerView}>
          <View style={styles.headerFontView}>
            <Title style={styles.headerFont}>Pedidos</Title>
          </View>
          <View style={styles.iconView}>
            <IconButton
              icon="logout-variant"
              color={palidGreen}
              size={35}
              onPress={() => {
                dispatch(startLogout());
                dispatch(cartLogout());
              }}
            />
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
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
      </ImageBackground>
    </View>
  );
};

export default OrdersClient;
