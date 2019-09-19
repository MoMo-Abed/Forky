import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  ImageBG: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "flex-start"
  },
  LeftIconBtnCont: {
    position: "absolute",
    marginTop: 1
  },
  LeftIcon: {
    marginRight: 6,
    marginTop: 1
  },
  LoginTextHeader: {
    marginTop: 1,
    color: "#2B2A34",
    paddingBottom: 20,
    marginLeft: 25
  },
  LoginInputSty: {
    width: "85%",
    marginLeft: 17
  },
  PasswordInputSty: {
    width: "85%",
    marginLeft: 17
  },
  ResetBtnTitle: {
    color: "#70747D",
    fontSize: 13
  },
  CookBtnCont: {
    marginTop: 30,
    marginLeft: 255
  },
  CookBtnSty: {
    width: 170,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#2DC268",
    marginLeft: -10
  }
});

export { _styles };
