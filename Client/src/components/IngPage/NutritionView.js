import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import { _styles } from "../../Styles/IngPage/NutritionView";
export default class NutritionView extends Component {
  render() {
    return (
      <View style={_styles.Cont}>
        <Text style={_styles.MainTitle}>Nutrition Information per Serving</Text>

        <View style={_styles.CircleSCont}>
          <View>
            <ProgressCircle
              percent={this.props.calories / 100}
              radius={40}
              borderWidth={5}
              color="#2DC268"
              shadowColor="white"
              bgColor="white"
            >
              <Text style={_styles.CircleCont}>CAL</Text>
              <Text style={_styles.CircleText}>{this.props.calories}</Text>
            </ProgressCircle>
          </View>

          {/**fat value circle */}
          <View>
            <ProgressCircle
              percent={this.props.Fat / 10}
              radius={40}
              borderWidth={5}
              color="#2DC268"
              shadowColor="white"
              bgColor="white"
            >
              <Text style={_styles.CircleCont}>FAT</Text>
              <Text style={_styles.CircleText}>{this.props.Fat / 10}g</Text>
            </ProgressCircle>
          </View>
          {/** Carbs value circle */}
          <View>
            <ProgressCircle
              percent={this.props.Carbs / 10}
              radius={40}
              borderWidth={5}
              color="#2DC268"
              shadowColor="white"
              bgColor="white"
            >
              <Text style={_styles.CircleCont}>CARBS</Text>
              <Text style={_styles.CircleText}>{this.props.Carbs}g</Text>
            </ProgressCircle>
          </View>
          {/** protin value circle */}
          <View>
            <ProgressCircle
              percent={this.props.Prot}
              radius={40}
              borderWidth={5}
              color="#2DC268"
              shadowColor="white"
              bgColor="white"
            >
              <Text style={_styles.CircleCont}>PROT</Text>
              <Text style={_styles.CircleText}>{this.props.Prot}g</Text>
            </ProgressCircle>
          </View>
        </View>
      </View>
    );
  }
}
