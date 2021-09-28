import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
