import React, { Component } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from "react-native";
import { connect } from "react-redux";
import { Header, Left, Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";
import ShoppingListView from "./ShoppingListView";
import { FetchShoppingList } from "../../Redux/actions/RecipeActions";
import _ from "lodash";

const { height } = Dimensions.get("window");

export class ShoppingMainView extends Component {
  componentWillMount() {
    this.props.FetchShoppingList();
  }

  state = {
    screenHeight: 0
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({
      screenHeight: contentHeight
    });
  };

  RenderShoppingList() {
    const { ShoppingList } = this.props;
    const scrollEnabled = this.state.screenHeight > height;

    if (
      !this.props.ShoppingList ||
      !this.props.ShoppingList.ingredientLines ||
      this.props.ShoppingList.ingredientLines.length === 0
    ) {
      return (
        <ScrollView
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <ShoppingListView ShoppingList={ShoppingList} />
        </ScrollView>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={_styles.container}>
        <Header style={{ backgroundColor: "#2DC268" }}>
          <Left>
            <Icon
              name="chevron-left"
              size={15}
              color="white"
              style={{ marginRight: 6, marginTop: 1 }}
              onPress={() => Actions.recipecard()}
            />
          </Left>
          <Body>
            <Text
              style={{ color: "white", fontWeight: "400", textAlign: "center" }}
            >
              ShoppingList
            </Text>
          </Body>
        </Header>
        {this.RenderShoppingList()}
      </View>
    );
  }
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

const mapStateToProps = state => {
  const ShoppingList = _.map(state.recipes.ShoppingList, (val, uid) => {
    return { ...val, uid };
  });

  return { ShoppingList };
};

export default connect(
  mapStateToProps,
  { FetchShoppingList }
)(ShoppingMainView);
