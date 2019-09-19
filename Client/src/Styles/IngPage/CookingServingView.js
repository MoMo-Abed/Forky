import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  Title: {
    color: "black",
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 20,
    marginTop: 20
  },
  ServingCont: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10
  },
  ServerBtnNum: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  },
  ServingBtnMin: {
    backgroundColor: "gray",
    width: 30
  },
  ServingBtnSty: {
    backgroundColor: "gray",
    width: 30
  },
  CookingTimeCont: {
    marginLeft: 200,
    marginTop: -60
  },
  CookingTimeLabel: {
    color: "black",
    fontSize: 20,
    fontWeight: "900"
  },
  CookingTimeText: {
    fontSize: 20
  }
});

export { _styles };
