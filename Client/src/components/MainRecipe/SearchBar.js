import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { RecipeValue } from "../../Redux/actions/RecipeActions";
import { SearchBar } from "react-native-elements";
import { _styles } from "../../Styles/MainRecipe/SearchBar";
export class SearchBarRecipe extends Component {
  state = {
    RecipeSearch: ""
  };

  render() {
    const { RecipeValue } = this.props;
    const { RecipeSearch } = this.state;
    return (
      <View>
        <SearchBar
          onSubmitEditing={() => {
            RecipeValue(RecipeSearch);
            this.setState({ RecipeSearch: "" });
          }}
          value={RecipeSearch}
          placeholder="Search recipes..."
          containerStyle={_styles.SearchBarCont}
          inputContainerStyle={_styles.InputCont}
          searchIcon={_styles.SearchIcon}
          leftIconContainerStyle={{ height: 20 }}
          onChangeText={RecipeSearch => this.setState({ RecipeSearch })}
          lightTheme
          round
        />
      </View>
    );
  }
}

export default connect(
  null,
  { RecipeValue }
)(SearchBarRecipe);
