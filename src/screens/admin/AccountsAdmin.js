import React from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { IconButton, Title, Card, Button, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

import { styles } from "../../styles/admin/AccountsAdmin";
import { startLogout } from "../../actions/auth";
import { palidGreen } from "../../utils/colors";

const AccountsAdmin = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/pranzo.png")}
        style={styles.image}
      >
        <View
          style={{
            backgroundColor: "white",
            borderBottomRightRadius: 60,
            borderBottomLeftRadius: 60,
            elevation: 6,
          }}
        >
          <View style={styles.headerView}>
            <View style={styles.headerFontView}>
              <Title style={styles.headerFont}>Cuentas Bancarias</Title>
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
          <Button
            style={{
              ...styles.button,
              backgroundColor: palidGreen,
              marginBottom: 20,
            }}
            mode="contained"
          >
            <Text style={styles.buttonText}>agregar cuenta bancaria</Text>
          </Button>
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
                Aún no tienes cuentas bancarias
              </Title>
            </Card.Content>
          </Card>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AccountsAdmin;
