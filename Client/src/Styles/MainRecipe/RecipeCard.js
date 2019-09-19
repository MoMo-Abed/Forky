import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  EmptyImageCont: {
    marginTop: 60,
    alignSelf: "center",
    opacity: 0.6
  },
  EmptyImageSty: {
    height: 220,
    width: 50,
    alignSelf: "center"
  },
  EmptyText: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  SliderStyCont: {
    borderRadius: 15,
    width: "95%",
    height: "80%"
  },
  SliderStyImageBG: {
    height: "100%",
    width: "100%",
    borderRadius: 15
  },
  SliderStyOverLay: {
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    opacity: 0.6
  },
  SliderStyTextHeader: {
    fontSize: 30,
    marginTop: 370,
    fontWeight: "900",
    color: "white",
    marginLeft: 10
  },
  ViewCont: {
    height: "80%",
    marginTop: 90
  },
  CarouselSlideStyle: {
    flex: 1,
    borderRadius: 15
  }
});

export { _styles };
