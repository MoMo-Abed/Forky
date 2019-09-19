import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { _styles } from "../../Styles/IngPage/CookingServingView";
export default class CookingServingView extends Component {
  state = {
    serving: 2
  };

  render() {
    return (
      <View>
        <Text style={_styles.Title}>Servings</Text>
        <View style={_styles.ServingCont}>
          <Button
            buttonStyle={_styles.ServingBtnMin}
            icon={<Icon name="minus" size={10} color="white" />}
            onPress={() =>
              this.setState({
                serving: this.state.serving - 1
              })
            }
          />
          <Text style={_styles.ServerBtnNum}>{this.state.serving}</Text>
          <Button
            buttonStyle={_styles.ServingBtnSty}
            icon={<Icon name="plus" size={10} color="white" />}
            onPress={() =>
              this.setState({
                serving: this.state.serving + 1
              })
            }
          />
        </View>
        {/**                     for Cooking Time                     */}
        <View style={_styles.CookingTimeCont}>
          <Text style={_styles.CookingTimeLabel}>Cooking Time</Text>
          <Text style={_styles.CookingTimeText}>{this.props.time}m</Text>
        </View>
      </View>
    );
  }
}
