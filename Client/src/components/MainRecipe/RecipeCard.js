import React, { Component } from "react";
import {
  View,
  Dimensions,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image
} from "react-native";
import { Query } from "@apollo/react-components";

import { connect } from "react-redux";
import Carousel from "react-native-snap-carousel";
import { Actions } from "react-native-router-flux";
import { GetRecipeIng } from "../../Redux/actions/RecipeActions";
import EmptyCard from "../../../assets/EmptyCard.png";
import RECIPES from "../../Graphql/Query/Recipes";
import { _styles } from "../../Styles/MainRecipe/RecipeCard";
export class RecipeCard extends Component {
  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
  }

  //Slider Items

  _renderItem({ item }) {
    return (
      <View style={_styles.SliderStyCont}>
        <TouchableHighlight
          style={{ borderRadius: 15 }}
          onPress={() => {
            this.props.GetRecipeIng(item);
            Actions.IngPage();
          }}
        >
          <ImageBackground
            imageStyle={{ borderRadius: 15 }}
            style={_styles.SliderStyImageBG}
            source={{ uri: item.image }}
          >
            <Image style={_styles.SliderStyOverLay} />

            <Text style={_styles.SliderStyTextHeader}>
              {item.label.length < 12
                ? `${item.label}`
                : `${item.label.substring(0, 15)}...`}
            </Text>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    const { RecipeV } = this.props;

    return (
      <View style={_styles.ViewCont}>
        <Query
          query={RECIPES}
          variables={{ value: RecipeV }}
          fetchPolicy="cache-and-network"
        >
          {(response, error) => {
            //If there is an error log the error to the console.
            if (error) {
              console.log("Get Recipes Error------", error);
            }
            //Empty array to valid the Carousel
            let Recipes = [];

            //If the response has data.
            if (response.data && response.data.Recipes && this.props.RecipeV) {
              //Update the Array with The response
              Recipes = response.data.Recipes;
              return (
                <Carousel
                  data={Recipes}
                  renderItem={this._renderItem}
                  hasParallaxImages={true}
                  itemWidth={Dimensions.get("window").width * 0.85}
                  sliderWidth={Dimensions.get("window").width}
                  containerCustomStyle={{ flex: 1 }}
                  slideStyle={_styles.CarouselSlideStyle}
                />
              );
            }
            //Return the loading Items if there is no data.
            return (
              <View style={_styles.EmptyImageCont}>
                <Image source={EmptyCard} style={_styles.EmptyImageSty} />
                <Text style={_styles.EmptyText}>
                  Enter What are your Looking For?
                </Text>
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  RecipeV: state.recipes.RecipeV
});

export default connect(
  mapStateToProps,
  { GetRecipeIng }
)(RecipeCard);
