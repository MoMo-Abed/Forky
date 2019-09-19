import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    height: "100%"
  },
  ViewCircle: {
    marginTop: 150,

    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#2A63F4",
    borderWidth: 10,
    borderColor: "#65009E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  CircleText: {
    fontSize: 85,
    color: "white",
    alignSelf: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center"
  },
  ProfileText: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 25,
    color: "white"
  },
  SignUpContainer: {
    backgroundColor: "#65009E",
    height: 230,
    width: "100%",
    marginTop: 40
  },
  SText: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 15,
    color: "white",
    marginLeft: 10
  },
  BtnContainer: {
    backgroundColor: "white",
    width: 250,
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 70
  },
  BtnText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 10,
    color: "#293551"
  },
  ListItem: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 30,
    width: 320,
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },

  ListItemText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "500",
    alignSelf: "center",
    marginRight: 0,
    marginTop: -25
  },
  ListLeng: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "500",
    alignSelf: "center",
    marginLeft: 200,
    marginTop: -25
  },
  IconRight: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "500",
    alignSelf: "center",
    marginLeft: 270,
    marginTop: -22
  },
  SignoutBtn: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 30,
    width: 220,
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },

  SignoutBtnText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "500",
    alignSelf: "center",
    marginRight: 0,
    marginTop: 25
  }
});

export { _styles };
