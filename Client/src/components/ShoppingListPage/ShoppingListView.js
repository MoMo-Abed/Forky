import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { Container, SwipeRow, Content, Button, Icon } from "native-base";
import {
  DeleteFromShoppingList,
  ShoppingToItem
} from "../../Redux/actions/RecipeActions";

class ShoppingListView extends Component {
  render() {
    return (
      <Container>
        <Content>
          {this.props.ShoppingList.map(fav => (
            <SwipeRow
              key={fav.uid}
              stopLeftSwipe
              rightOpenValue={-75}
              body={
                <Button
                  transparent
                  onPress={() => {
                    this.props.ShoppingToItem(fav);
                    Actions.ItemPage();
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
              }
              right={
                <Button
                  danger
                  onPress={() => this.props.DeleteFromShoppingList(fav.uid)}
                >
                  <Icon active name="trash" />
                </Button>
              }
            />
          ))}
        </Content>
      </Container>
    );
  }
}

export default connect(
  null,
  { DeleteFromShoppingList, ShoppingToItem }
)(ShoppingListView);
