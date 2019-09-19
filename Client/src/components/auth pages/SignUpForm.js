import React, { Component } from "react";
import { connect } from "react-redux";
import { UserSignUp } from "../../Redux/actions/RecipeActions";
import { ImageBackground, StyleSheet, Dimensions, View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import backgroundauthall from "../backgroundauthall.jpg";
import { Mutation } from "@apollo/react-components";
import { _styles } from "../../Styles/Auth/SignUp";
import CREATE_USER from "../../Graphql/Mutation/createUser";
import { CreateToken } from "../../Utils/Auth";

const { height, width } = Dimensions.get("window");

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  //Method to create user on Server

  onCreateUserPressed = async ({ createUser }) => {
    const { email, password, name } = this.state;
    const Inputs = {
      email,
      password,
      name
    };

    const { data } = await createUser({
      variables: Inputs
    });

    try {
      await CreateToken(data.createUser.token);
      Actions.main();
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <ImageBackground
        style={[_styles.ImageBG, { width: width, height: height }]}
        source={backgroundauthall}
      >
        <View style={{ marginTop: 220 }}>
          <Text h2 style={_styles.SignUpHeader}>
            Sign Up
          </Text>

          <View style={{ marginTop: 20 }}>
            {/**name input */}

            <Input
              inputContainerStyle={_styles.EmailInput}
              inputStyle={{ color: "#70747D" }}
              placeholder="Enter your name"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
            {/** Email input  */}
            <Input
              inputContainerStyle={_styles.EmailInput}
              inputStyle={{ color: "#70747D" }}
              placeholder="Enter your Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />

            {/** password input */}

            <Input
              inputContainerStyle={_styles.PasswordInput}
              placeholder="Enter your Password"
              inputStyle={{ color: "#70747D" }}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
              value={this.state.password}
              errorMessage={this.props.error}
            />

            <Mutation mutation={CREATE_USER}>
              {(createUser, error, data) => {
                console.log("error-----------", error);
                //If there is an error throw the error
                if (error) {
                  console.log("error----------", error);
                }
                if (createUser) {
                  //If the response has data load the response data via the createPlayer property.
                  return (
                    <Button
                      titleStyle={{ fontSize: 20 }}
                      containerStyle={_styles.SignUpBtnCont}
                      buttonStyle={_styles.SignUpBtnSty}
                      title="SignUp"
                      onPress={() => this.onCreateUserPressed({ createUser })}
                      loading={this.props.signUpLoading ? true : false}
                    />
                  );
                }

                //By default it is loading the result so just return loading...
                return <Text>Loading...</Text>;
              }}
            </Mutation>

            <Button
              titleStyle={{ fontSize: 20 }}
              containerStyle={_styles.SignInBtnCont}
              buttonStyle={_styles.SignInbtnSty}
              title="Nah Sign In"
              onPress={() => Actions.login()}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  signUpLoading: state.recipes.signUpLoading,
  error: state.recipes.error
});

export default connect(
  mapStateToProps,
  { UserSignUp }
)(SignUpForm);
