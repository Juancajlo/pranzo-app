import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  headerView: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  headerFontView: {
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerFont: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeaderFont: {
    fontSize: 15,
    marginBottom: 20,
  },
  iconView: {
    width: "20%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  cardContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 6,
  },
  cardTitleContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
