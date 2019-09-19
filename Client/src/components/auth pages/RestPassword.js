import React, { Component } from "react";
import { connect } from "react-redux";
import { RestPassword } from "../../Redux/actions/RecipeActions";
import { ImageBackground, View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import backgroundauthall from "../backgroundauthall.jpg";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";

class RestPasswordUser extends Component {
  state = {
    RestEmail: ""
  };
  render() {
    const { RestEmail } = this.state;

    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={backgroundauthall}
      >
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={() => Actions.login()}
            type="clear"
            containerStyle={{ position: "absolute", marginTop: 1 }}
            titleStyle={{ color: "#70747D" }}
            icon={
              <Icon
                name="chevron-left"
                size={15}
                color="#70747D"
                style={{ marginRight: 6, marginTop: 1 }}
              />
            }
            title="Login"
          />
        </View>

        <View style={{ marginTop: 170 }}>
          <Text
            h3
            style={{
              marginTop: 1,
              color: "#2B2A34",
              paddingBottom: 20,
              marginLeft: 25
            }}
          >
            Rest Password
          </Text>

          {/** login input  */}
          <Input
            inputContainerStyle={{ width: "85%", marginLeft: 17 }}
            inputStyle={{ color: "#70747D" }}
            placeholder="Enter your Login Email"
            onChangeText={RestEmail => this.setState({ RestEmail })}
            value={this.state.RestEmail}
          />

          {/** reset button */}

          <Button
            titleStyle={{ fontSize: 20 }}
            containerStyle={{ marginTop: 30, marginLeft: 255 }}
            buttonStyle={{
              width: 170,
              height: 70,
              borderRadius: 15,
              backgroundColor: "#2DC268"
            }}
            title="Rest Password"
            onPress={() => {
              this.props.RestPassword({ RestEmail });
              this.setState({
                RestEmail: ""
              });
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { RestPassword }
)(RestPasswordUser);
