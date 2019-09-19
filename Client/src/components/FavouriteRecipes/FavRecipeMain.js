import React, { PureComponent } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import FavRecipesListView from "./FavRecipesListView";
import { Container, Header, Left, Body, Right, Spinner } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";
import { Query } from "@apollo/react-components";
import USER from "../../Graphql/Query/user";
import { FetchLovedRecipe } from "../../Redux/actions/RecipeActions";
import _ from "lodash";
const { height } = Dimensions.get("window");

export class FavRecipeMain extends PureComponent {
  state = {
    screenHeight: 0
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({
      screenHeight: contentHeight
    });
  };

  RenderFavouriteRecipes() {
    const scrollEnabled = this.state.screenHeight > height;
    const YYY = true;
    if (YYY) {
      return (
        <ScrollView
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <FavRecipesListView LovedRecipes={LovedRecipes} />
        </ScrollView>
      );
    } else {
      return <Spinner color="#2DC268" />;
    }
  }

  render() {
    return (
      <View>
        <View>
          <Header style={{ backgroundColor: "white" }}>
            <Left>
              <Icon
                name="chevron-left"
                size={15}
                color="black"
                style={{ marginRight: 6, marginTop: 1 }}
                onPress={() => Actions.recipecard()}
              />
            </Left>
            <Body>
              <Text style={{ color: "black", fontWeight: "400" }}>
                Favorite Recipes
              </Text>
            </Body>
          </Header>
        </View>
        <Query query={USER} fetchPolicy="cache-and-network">
          {(response, error) => {
            //If there is an error log the error to the console.
            if (error) {
              console.log("Get Player Error------", error);
            }
            console.log(response.data);

            //If the response has data.
            if (response.data && response.data.user) {
              //SEt the state of  the returnedPlayer to the response's player returned.
              // this.setState({ News: response.data.news });
              //this.GetNews(response.data.news);
              //Set the state of the updatedWonSuperBowl
              console.log(response.data);
              return <View>{this.RenderFavouriteRecipes()}</View>;
            }
            //Return the loading text if there is no data.
            return <Text>Loading....</Text>;
          }}
        </Query>
      </View>
    );
  }
}

const mapStateToProps = state => {};

export default connect(
  null,
  { FetchLovedRecipe }
)(FavRecipeMain);
