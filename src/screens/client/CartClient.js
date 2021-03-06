import React, { useEffect } from "react";
import { View, ScrollView, Alert, ImageBackground } from "react-native";
import {
  IconButton,
  Title,
  Text,
  Card,
  Button,
  Paragraph,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "../../styles/client/CartClient";
import { startLogout } from "../../actions/auth";
import { onAddItem, onRemoveItem, cartLogout } from "../../actions/cart";
import { palidGreen } from "../../utils/colors";

const CartClient = ({ navigation }) => {
  const dispatch = useDispatch();
  const stateItems = useSelector((state) => state.cart);
  const stateBolivar = useSelector((state) => state.money);

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
      <ImageBackground
        source={require("../../../assets/images/pranzo.png")}
        style={styles.image}
      >
        <View style={styles.headerView}>
          <View style={styles.headerFontView}>
            <Title style={styles.headerFont}>
              Carrito ({stateItems.itemNumber})
            </Title>
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
                        <Title
                          style={{
                            alignSelf: "flex-start",
                            fontWeight: "bold",
                          }}
                        >
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
                          color={palidGreen}
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
                          color={palidGreen}
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
                  ??Deseas agregar alguno?
                </Title>
                <Button
                  style={{
                    ...styles.button,
                    backgroundColor: palidGreen,
                    marginVertical: 10,
                  }}
                  onPress={() => {
                    navigation.navigate("Men??");
                  }}
                  mode="contained"
                >
                  <Text style={styles.buttonText}>agregar productos</Text>
                </Button>
              </Card.Content>
            </Card>
          )}
          {stateItems.items.length > 0 ? (
            <Card style={styles.cardContainer}>
              <Card.Content style={styles.cardTitleContent}>
                <Title
                  style={{
                    alignSelf: "center",
                    fontWeight: "bold",
                    fontSize: 21,
                    marginBottom: 10,
                  }}
                >
                  Total
                </Title>
                <Title
                  style={{
                    alignSelf: "flex-start",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: 18,
                    marginBottom: 5,
                  }}
                >
                  Bol??vares:{" "}
                  <Text style={{ fontSize: 18 }}>
                    {stateBolivar.bolivar} (al cambio del d??a)
                  </Text>
                </Title>
                <Title
                  style={{
                    alignSelf: "flex-start",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: 18,
                    marginBottom: 5,
                  }}
                >
                  D??lares: <Text style={{ fontSize: 18 }}>20</Text>
                </Title>
                <Button
                  style={{
                    ...styles.button,
                    backgroundColor: palidGreen,
                    marginVertical: 10,
                  }}
                  onPress={() => {
                    if (stateItems.itemNumber < 5) {
                      Alert.alert(
                        "Lo sentimos",
                        "debes ordenar 5 platos para finalizar la compra",
                        [
                          {
                            text: "OK",
                          },
                        ]
                      );
                    }
                  }}
                  mode="contained"
                >
                  <Text style={styles.buttonText}>pagar</Text>
                </Button>
              </Card.Content>
            </Card>
          ) : (
            <></>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default CartClient;
