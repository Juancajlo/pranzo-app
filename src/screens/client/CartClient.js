import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import {
  IconButton,
  Title,
  Text,
  Card,
  Button,
  Paragraph,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { startLogout } from "../../actions/auth";
import { onAddItem, onRemoveItem, cartLogout } from "../../actions/cart";
import { palidGreen, normalGray, normalGreen } from "../../utils/colors";

const CartClient = ({ navigation }) => {
  const dispatch = useDispatch();
  const stateItems = useSelector((state) => state.cart);

  const onAdd = (product) => {
    const exist = stateItems.items.find((x) => x.id === product.id);
    if (exist) {
      const item = stateItems.items.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
      );
      dispatch(onAddItem(item));
    } else {
      const item = [...stateItems.items, { ...product, quantity: 1 }];
      dispatch(onAddItem(item));
    }
  };

  const onRemove = (product) => {
    const exist = stateItems.items.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      const item = stateItems.items.filter((x) => x.id !== product.id);
      dispatch(onRemoveItem(item));
    } else {
      const item = stateItems.items.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
      );
      dispatch(onRemoveItem(item));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.headerFontView}>
          <Title style={styles.headerFont}>
            Carrito ({stateItems.itemNumber})
          </Title>
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
        {stateItems.items.length > 0 ? (
          stateItems.items.map((data, index) => {
            return (
              <Card key={index} style={styles.cardContainer}>
                <Card.Content style={styles.cardTitleContent}>
                  <View
                    style={{ flex: 1, flexDirection: "row", width: "100%" }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        flex: 3,
                      }}
                    >
                      <Title style={{ alignSelf: "flex-start" }}>
                        {data.name}
                      </Title>
                      <Paragraph style={{ alignSelf: "flex-start" }}>
                        {data.description}
                      </Paragraph>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        icon="plus-box"
                        color={normalGreen}
                        size={20}
                        onPress={() => {
                          if (stateItems.itemNumber >= 5) {
                            Alert.alert(
                              "Lo sentimos",
                              "solo puedes ordenar 5 platos",
                              [
                                {
                                  text: "OK",
                                },
                              ]
                            );
                          } else {
                            onAdd(stateItems.items[index]);
                          }
                        }}
                      />
                      <Title style={{ fontSize: 18 }}>{data.quantity}</Title>
                      <IconButton
                        icon="minus-box"
                        color={normalGreen}
                        size={20}
                        onPress={() => onRemove(stateItems.items[index])}
                      />
                    </View>
                  </View>
                </Card.Content>
              </Card>
            );
          })
        ) : (
          <Card style={styles.cardContainer}>
            <Card.Content style={styles.cardTitleContent}>
              <Title
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 21,
                }}
              >
                No tienes productos en el carrito
              </Title>
              <Title
                style={{ alignSelf: "center", fontSize: 19, marginBottom: 5 }}
              >
                ¿Deseas agregar alguno?
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
                <Text style={styles.buttonText}>agregar productos</Text>
              </Button>
            </Card.Content>
          </Card>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    marginHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
  cardContainer: {
    margin: 10,
  },
  cardTitleContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
});

export default CartClient;
