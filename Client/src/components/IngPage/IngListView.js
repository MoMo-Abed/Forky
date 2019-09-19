import React, { Component } from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { _styles } from "../../Styles/IngPage/IngListView";
export default class IngListView extends Component {
  render() {
    return (
      <View style={_styles.Cont}>
        <Text style={_styles.Title}>Ingredients</Text>
        {this.props.Ing.map(ing => (
          <ListItem title={ing} key={ing} />
        ))}
      </View>
    );
  }
}
