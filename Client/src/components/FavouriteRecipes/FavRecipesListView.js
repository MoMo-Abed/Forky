import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { FavToIng } from "../../Redux/actions/RecipeActions";
import { Actions } from "react-native-router-flux";
import { DeleteLovedRecipe } from "../../Redux/actions/RecipeActions";
import { Container, SwipeRow, Content, Button, Icon } from "native-base";
class FavRecipesListView extends Component {
  render() {
    return (
      <Container>
        <Content>
          {this.props.LovedRecipes.map(fav => (
            <SwipeRow rightOpenValue={-75}>
              <View style={styles.standaloneRowBack}>
                <Button
                  danger
                  onPress={() => this.props.DeleteLovedRecipe(fav.uid)}
                >
                  <Icon active name="trash" />
                </Button>
              </View>
              <View style={styles.standaloneRowFront}>
                <Button
                  transparent
                  onPress={() => {
                    this.props.FavToIng(fav);
                    Actions.IngPage();
                  }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={{ borderRadius: 5, width: 70, height: 70 }}
                      source={{ uri: fav.image }}
                    />
                    <View style={{ marginTop: 20, marginLeft: 10 }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "900",
                          color: "black"
                        }}
                      >
                        {fav.label.length < 15
                          ? `${fav.label}`
                          : `${fav.label.substring(0, 20)}...`}
                      </Text>
                      <Text style={{ fontSize: 10 }}>{fav.source}</Text>
                    </View>
                  </View>
                </Button>
              </View>
            </SwipeRow>
          ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30
  },
  standaloneRowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    justifyContent: "center",
    height: 50
  },
  standaloneRowBack: {
    alignItems: "center",
    backgroundColor: "#8BC645",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  }
});

export default connect(
  null,
  { FavToIng, DeleteLovedRecipe }
)(FavRecipesListView);
