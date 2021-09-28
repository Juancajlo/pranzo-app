import React, { useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { IconButton, Title, Card, Chip, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

import { styles } from "../../styles/admin/ManageAdmin";
import { startLogout } from "../../actions/auth";
import { palidGreen, normalGray, darkPalidGreen } from "../../utils/colors";

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

export default ManageAdmin;
