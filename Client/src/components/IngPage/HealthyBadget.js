import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Badge } from "react-native-elements";
import { _styles } from "../../Styles/IngPage/HealthyBadget";
export default class HealthyBadget extends Component {
  render() {
    return (
      <View style={_styles.Cont}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {this.props.healthLabel.map(label => (
            <Badge
              badgeStyle={_styles.BadgetSty}
              key={label}
              status="success"
              value={label}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
