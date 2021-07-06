import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { IconButton, Title, Card, Chip, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

import { startLogout } from "../../actions/auth";
import {
  palidGreen,
  normalGray,
  normalGreen,
  darkPalidGreen,
} from "../../utils/colors";

const ManageAdmin = () => {
  const dispatch = useDispatch();
  const [selectedChipOne, setSelectedChipOne] = useState(palidGreen);
  const [selectedChipTwo, setSelectedChipTwo] = useState(palidGreen);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/pranzo.png")}
        style={styles.image}
      >
        <View style={styles.headerView}>
          <View style={styles.headerFontView}>
            <Title style={styles.headerFont}>Administrar</Title>
          </View>
          <View style={styles.iconView}>
            <IconButton
              icon="logout-variant"
              color={palidGreen}
              size={35}
              onPress={() => {
                dispatch(startLogout());
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 10,
          }}
        >
          <Chip
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              backgroundColor: selectedChipOne,
              elevation: 5,
            }}
            onPress={() => {
              setSelectedChipOne(darkPalidGreen);
              setSelectedChipTwo(palidGreen);
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: normalGray }}
            >
              POR ENTREGAR
            </Text>
          </Chip>
          <Chip
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              backgroundColor: selectedChipTwo,
              elevation: 5,
            }}
            onPress={() => {
              setSelectedChipOne(palidGreen);
              setSelectedChipTwo(darkPalidGreen);
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: normalGray }}
            >
              POR CONFIRMAR
            </Text>
          </Chip>
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
                Aún no tienes pedidos
              </Title>
            </Card.Content>
          </Card>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  headerView: {
    padding: 20,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    elevation: 6,
  },
  headerFontView: {
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
  },
  headerFont: {
    fontSize: 30,
    fontWeight: "bold",
  },
  iconView: {
    width: "20%",
  },
  cardContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 30,
    elevation: 6,
  },
  cardTitleContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ManageAdmin;
