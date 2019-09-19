import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  RecipeCont: {
    width: "100%",
    height: "100%"
  },
  RecipeImageBG: {
    height: 260,
    width: "100%"
  },
  RecipeImageOverLay: {
    backgroundColor: "black",
    position: "absolute",
    height: 260,
    width: "100%",
    opacity: 0.6
  },
  RecipeLabel: {
    fontSize: 35,
    marginTop: 140,
    marginLeft: 15,
    fontWeight: "900",
    color: "white"
  },
  StartCookingBtnCont: {
    marginLeft: 13,
    marginTop: 35
  },
  StartCookingBtnSty: {
    backgroundColor: "white",
    width: "95%"
  },
  StartCookingBtnTitle: {
    color: "black",
    fontWeight: "100"
  }
});

export { _styles };
