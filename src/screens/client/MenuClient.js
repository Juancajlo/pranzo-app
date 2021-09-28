import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { View, ScrollView, Alert, ImageBackground } from "react-native";
import {
  IconButton,
  Title,
  Card,
  Paragraph,
  Subheading,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "../../styles/client/MenuClient";
import { palidGreen } from "../../utils/colors";
import { DATABASE_URL } from "../../config/";
import { login, startLogout } from "../../actions/auth";
import { onAddItem, cartLogout } from "../../actions/cart";
import { startGettingPrice } from "../../actions/money";

const MenuClient = ({ navigation }) => {
  const dispatch = useDispatch();
  const stateItems = useSelector((state) => state.cart.items);
  const cartItems = useSelector((state) => state.cart.itemNumber);
  const [menuImages, setMenuImages] = useState(null);

  useEffect(() => {
    loadingMenu();
    dispatch(startGettingPrice());
  }, []);

  useEffect(() => {
    handleRedux();
  }, []);

  const handleRedux = async () => {
    const user = await JSON.parse(await AsyncStorage.getItem("user"));
    if (user) {
      dispatch(login(user.id, user.firstName, user.lastName, user.isAdmin));
    }
  };

  const loadingMenu = async () => {
    try {
      const resp = await axios.get(`${DATABASE_URL}/dishes/`);
      setMenuImages(resp.data.dishes);
    } catch (e) {
      console.log("Error obteniendo el menú: " + e.message);
    }
  };

  const onAdd = (product) => {
    const exist = stateItems.find((x) => x.id === product.id);
    if (exist) {
      const item = stateItems.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
      );
      dispatch(onAddItem(item));
    } else {
      const item = [...stateItems, { ...product, quantity: 1 }];
      dispatch(onAddItem(item));
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/pranzo.png")}
        style={styles.image}
      >
        <View
          style={{
            marginBottom: 20,
            backgroundColor: "white",
            borderBottomRightRadius: 60,
            borderBottomLeftRadius: 60,
            elevation: 6,
          }}
        >
          <View style={styles.headerView}>
            <View style={styles.headerFontView}>
              <Title style={styles.headerFont}>Menú</Title>
              <Subheading style={styles.subHeaderFont}>
                Escoja 5 platos de su preferencia para realizar el pedido
              </Subheading>
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
        </View>
        {menuImages ? (
          <ScrollView style={{ flex: 1 }}>
            {menuImages.map((data, index) => {
              return (
                <Card key={index} style={styles.cardContainer}>
                  <Card.Cover
                    source={{
                      uri: "data:image/jpeg;base64," + data.dishPicture,
                    }}
                    style={{ borderRadius: 5 }}
                  />
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
                          alignItems: "flex-end",
                        }}
                      >
                        <IconButton
                          icon="plus-box"
                          color={palidGreen}
                          size={40}
                          onPress={() => {
                            if (cartItems >= 5) {
                              Alert.alert(
                                "Lo sentimos",
                                "solo puedes ordenar 5 platos",
                                [
                                  {
                                    text: "Ir a carrito",
                                    onPress: () => {
                                      navigation.navigate("Carrito");
                                    },
                                  },
                                  {
                                    text: "OK",
                                  },
                                ]
                              );
                            } else {
                              onAdd(menuImages[index]);
                            }
                          }}
                        />
                      </View>
                    </View>
                  </Card.Content>
                </Card>
              );
            })}
          </ScrollView>
        ) : (
          <ScrollView
            style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          ></ScrollView>
        )}
      </ImageBackground>
    </View>
  );
};

export default MenuClient;
