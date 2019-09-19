import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { DeleteFromShoppingList } from "../../Redux/actions/RecipeActions";
import {
  Container,
  SwipeRow,
  Left,
  Title,
  Content,
  Button,
  Body,
  Header
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export class ShoppingListItems extends Component {
  RenderFavouriteRecipes() {
    if (!this.props.ShoppingToItem || this.props.ShoppingToItem.length === 0) {
      return null;
    } else {
      return (
        <View>
          {this.props.ShoppingToItem.ingredients.map((item, index) => (
            <SwipeRow
              key={index}
              stopLeftSwipe
              rightOpenValue={-75}
              body={
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "900", color: "black" }}
                  >
                    {item.text}
                  </Text>
                  <Text style={{ fontSize: 10 }}>{`${item.weight}g`}</Text>
                </View>
              }
              right={
                <Button
                  danger
                  onPress={() => this.props.DeleteFromShoppingList(index)}
                >
                  <Icon active name="trash" />
                </Button>
              }
            />
          ))}
        </View>
      );
    }
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#2DC268" }}>
          <Left>
            <Icon
              name="chevron-left"
              size={15}
              color="white"
              style={{ marginRight: 6, marginTop: 1 }}
              onPress={() => Actions.shoppinglistpage()}
            />
          </Left>
          <Body>
            <Title
              style={{ color: "white", fontWeight: "400", textAlign: "center" }}
            >
              Items
            </Title>
          </Body>
        </Header>
        <Content>{this.RenderFavouriteRecipes()}</Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ShoppingToItem: state.recipes.ShoppingToItem
});

export default connect(
  mapStateToProps,
  { DeleteFromShoppingList }
)(ShoppingListItems);
