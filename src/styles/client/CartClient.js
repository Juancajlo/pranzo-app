import { StyleSheet } from "react-native";
import { normalGray } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  button: {
    marginHorizontal: 50,
    borderRadius: 60,
  },
  buttonText: {
    color: normalGray,
    fontWeight: "bold",
  },
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    elevation: 6,
  },
  cardTitleContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerView: {
    marginBottom: 10,
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
    alignItems: "flex-start",
  },
  headerFont: {
    fontSize: 30,
    fontWeight: "bold",
  },
  iconView: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
