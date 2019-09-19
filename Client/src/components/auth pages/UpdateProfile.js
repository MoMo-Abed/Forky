import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-picker";
import { Thumbnail } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { ProfileUpdate } from "../../Redux/actions/RecipeActions";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  H2
} from "native-base";

import { Button } from "react-native-elements";

const options = {
  title: "Select Avatar",

  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export class UpdateProfile extends Component {
  state = {
    textvalue: null,
    fullvalue: "",
    avatarSource: { uri: "http://www.dogeweather.com/img/fbdoge.png" },
    username: "",
    fullname: ""
  };

  getSelectedImage() {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 60
          }}
        >
          Tell Us More About You
        </Text>
        <Thumbnail
          size={40}
          style={{ width: 100, height: 100, marginTop: 100, marginLeft: 150 }}
          source={this.state.avatarSource}
        />
        <Icon
          name="edit"
          size={35}
          color="gray"
          style={{ width: 35, marginLeft: 210, marginTop: -25 }}
          onPress={() => this.getSelectedImage()}
        />

        <Form>
          <Item stackedLabel>
            <Label>Full Name</Label>
            <Input
              value={this.state.fullname}
              onChangeText={fullname => this.setState({ fullname })}
              style={{ color: "black" }}
              placeholderTextColor="gray"
              placeholder="Will Smith"
            />
          </Item>
          <Item stackedLabel last>
            <Label>UserName</Label>
            <Input
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              style={{ color: "black" }}
              placeholderTextColor="gray"
              placeholder="WiSmith"
            />
          </Item>

          <Button
            titleStyle={{ fontSize: 20 }}
            containerStyle={{ marginTop: 30, marginLeft: 275 }}
            buttonStyle={{
              width: 170,
              height: 70,
              borderRadius: 15,
              backgroundColor: "#2DC268"
            }}
            title="Save"
            onPress={() =>
              this.props.ProfileUpdate({
                image: this.state.avatarSource,
                username: this.state.username,
                fullname: this.state.fullname
              })
            }
            loading={this.props.signUpLoading ? true : false}
          />
        </Form>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { ProfileUpdate }
)(UpdateProfile);
