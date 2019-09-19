import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { AddToShoppingList } from "../../Redux/actions/RecipeActions";
import { Actions } from "react-native-router-flux";
import { _styles } from "../../Styles/IngPage/AddIngToShopping";
class AddIngToShopping extends Component {
  render() {
    return (
      <View>
        <Button
          buttonStyle={_styles.ShoppingBtn}
          icon={
            <Icon
              name="shopping-cart"
              size={20}
              color="white"
              style={_styles.shoppinglistIcon}
            />
          }
          title="Add Ingredients to your ShoppingList "
          onPress={() => {
            this.props.AddToShoppingList(this.props.RecipeIng);
            Actions.shoppinglistpage();
          }}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { AddToShoppingList }
)(AddIngToShopping);
