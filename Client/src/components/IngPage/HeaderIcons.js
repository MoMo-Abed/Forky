import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { LovedRecipe } from "../../Redux/actions/RecipeActions";
import { _styles } from "../../Styles/IngPage/HeaderIcons";
import CREATESAVEDRECIPE from "../../Graphql/Mutation/CreateSavedRecipe";
import { Mutation } from "@apollo/react-components";

class HeaderIcons extends Component {
  state = {
    color: "white"
  };

  CreateSaved = async ({ CreateSavedRecipe }) => {
    const Inputs = {
      ...this.props.RecipeIng
    };

    //THen pass your newPlayer object as variables to the func argument which is the mutation func of the graphql server.
    const { data } = await CreateSavedRecipe({
      variables: { inputs: { ...this.props.RecipeIng } }
    });

    //await console.log(data.login.token);
  };
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <Button
          onPress={() => Actions.recipecard()}
          type="clear"
          containerStyle={_styles.ARIconCont}
          icon={
            <Icon
              name="chevron-left"
              size={20}
              color="white"
              style={{ marginTop: 5 }}
            />
          }
        />

        <Mutation mutation={CREATESAVEDRECIPE}>
          {(CreateSavedRecipe, error, data) => {
            console.log("error-----------", error);
            //If there is an error throw the error
            if (error) {
              console.log("error----------", error);
            }
            if (CreateSavedRecipe) {
              //If the response has data load the response data via the createPlayer property.
              return (
                <Icon
                  name="heart"
                  size={20}
                  color={this.state.color}
                  style={_styles.HeartIcon}
                  onPress={() => {
                    this.CreateSaved({ CreateSavedRecipe });
                    this.setState({
                      color: "red"
                    });
                  }}
                />
              );
            }

            //By default it is loading the result so just return loading...
            return <Text>Loading...</Text>;
          }}
        </Mutation>
      </View>
    );
  }
}

export default connect(
  null,
  { LovedRecipe }
)(HeaderIcons);
