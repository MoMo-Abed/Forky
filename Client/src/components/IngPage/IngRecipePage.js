import React, { Component } from "react";
import {
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import { GetRecipeIng } from "../../Redux/actions/RecipeActions";
import { Button, Text } from "react-native-elements";
import NutritionView from "./NutritionView";
import IngListView from "./IngListView";
import AddIngToShopping from "./AddIngToShopping";
import HeaderIcons from "./HeaderIcons";
import CookingServingView from "./CookingServingView";
import HealthyBadget from "./HealthyBadget";
import { connect } from "react-redux";
import { Spinner } from "native-base";
import { _styles } from "../../Styles/IngPage/IngRecipePage";
import uuid from "uuid";
const { height } = Dimensions.get("window");

class IngRecipePage extends Component {
  state = {
    screenHeight: 0
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({
      screenHeight: contentHeight
    });
  };

  renderRecipe() {
    const { RecipeIng } = this.props;
    RecipeIng._id = uuid();

    if (!this.props.RecipeIng) {
      return <Spinner color="#2DC268" />;
    } else {
      const scrollEnabled = this.state.screenHeight > height;
      const Float_calories = RecipeIng.calories;

      const calories = Math.floor(Float_calories);
      const Float_Fat = RecipeIng.totalNutrients.FAT.quantity;
      const Fat = Math.floor(Float_Fat);
      const Float_Carbs = RecipeIng.totalNutrients.CHOCDF.quantity;
      const Carbs = Math.floor(Float_Carbs);
      const FLOAT_Prot = RecipeIng.totalNutrients.PROCNT.quantity;
      const Prot = Math.floor(FLOAT_Prot);
      const Ing = RecipeIng.ingredientLines;
      const time = RecipeIng.totalTime;
      const healthyLabel = RecipeIng.healthLabels;
      return (
        <View style={_styles.RecipeCont}>
          <ScrollView
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}
          >
            <ImageBackground
              style={_styles.RecipeImageBG}
              source={{ uri: RecipeIng.image }}
            >
              <Image style={_styles.RecipeImageOverLay} />

              {/**                Header Icons                         */}

              <HeaderIcons RecipeIng={RecipeIng} />

              <Text style={_styles.RecipeLabel}>
                {RecipeIng.label.length < 15
                  ? `${RecipeIng.label}`
                  : `${RecipeIng.label.substring(0, 20)}...`}
              </Text>
            </ImageBackground>

            <HealthyBadget healthLabel={healthyLabel} />
            {/**                      for serving -cooking time                    */}
            <CookingServingView time={time} />

            <View>
              <Button
                containerStyle={_styles.StartCookingBtnCont}
                buttonStyle={_styles.StartCookingBtnSty}
                titleStyle={_styles.StartCookingBtnTitle}
                title="Start Cooking"
              />

              {/**                      for Nutrition                   */}

              <NutritionView
                Carbs={Carbs}
                calories={calories}
                Fat={Fat}
                Prot={Prot}
              />
            </View>

            {/**               ing items                      */}
            <IngListView Ing={Ing} />
          </ScrollView>

          {/**        Fixed Button                      */}
          <AddIngToShopping RecipeIng={RecipeIng} />
        </View>
      );
    }
  }

  render() {
    return <View>{this.renderRecipe()}</View>;
  }
}

const mapStateToProps = state => ({
  RecipeIng: state.recipes.RecipeIng
});

export default connect(
  mapStateToProps,
  { GetRecipeIng }
)(IngRecipePage);
