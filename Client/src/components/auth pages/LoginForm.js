import React, { Component } from "react";
import { connect } from "react-redux";
import { UserLogin } from "../../Redux/actions/RecipeActions";
import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Text } from "react-native-elements";
import backgroundauthall from "../backgroundauthall.jpg";
import { Mutation } from "@apollo/react-components";
import { _styles } from "../../Styles/Auth/Login";
import LOGIN from "../../Graphql/Mutation/login";
import { CreateToken } from "../../Utils/Auth";

const { height, width } = Dimensions.get("window");

class LoginForm extends Component {
  state = {
    loginemail: "",
    loginpassword: ""
  };

  onLoginPressed = async ({ login }) => {
    const { loginpassword, loginemail } = this.state;
    const Inputs = {
      email: loginemail,
      password: loginpassword
    };

    //THen pass your newPlayer object as variables to the func argument which is the mutation func of the graphql server.
    const { data } = await login({
      variables: Inputs
    });

    //await console.log(data.login.token);
    try {
      await CreateToken(data.login.token);
      Actions.main();
      await this.props.login();
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <ImageBackground
        source={backgroundauthall}
        style={[
          _styles.ImageBG,
          {
            height: height,
            width: width
          }
        ]}
      >
        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => Actions.signup()}
            type="clear"
            containerStyle={_styles.LeftIconBtnCont}
            titleStyle={{ color: "#70747D" }}
            icon={
              <Icon
                name="chevron-left"
                size={15}
                color="#70747D"
                style={_styles.LeftIcon}
              />
            }
            title="SIGN UP"
          />
        </View>

        <View style={{ marginTop: 170 }}>
          <Text h2 style={_styles.LoginTextHeader}>
            Log In
          </Text>

          {/** login input  */}
          <Input
            inputContainerStyle={_styles.LoginInputSty}
            inputStyle={{ color: "#70747D" }}
            placeholder="Enter your Email"
            onChangeText={loginemail => this.setState({ loginemail })}
            value={this.state.loginemail}
            shake={this.props.error ? true : false}
          />

          {/** password input */}

          <Input
            inputContainerStyle={_styles.PasswordInputSty}
            placeholder="Enter your Password"
            inputStyle={{ color: "#70747D" }}
            onChangeText={loginpassword => this.setState({ loginpassword })}
            errorProps={this.props.error}
            errorMessage={this.props.error}
            secureTextEntry
          />

          {/** rest password button */}
          <Button
            type="clear"
            title="Forgot Password?"
            containerStyle={{ marginRight: 252 }}
            titleStyle={_styles.ResetBtnTitle}
            onPress={() => Actions.RestPasswordUser()}
          />

          <Mutation mutation={LOGIN}>
            {(login, error, data) => {
              console.log("error-----------", error);
              //If there is an error throw the error
              if (error) {
                console.log("error----------", error);
              }
              if (login) {
                //If the response has data load the response data via the createPlayer property.
                return (
                  <Button
                    titleStyle={{ fontSize: 20 }}
                    containerStyle={_styles.CookBtnCont}
                    buttonStyle={_styles.CookBtnSty}
                    title="Let's Cook!"
                    onPress={() => this.onLoginPressed({ login })}
                    loading={this.props.LoginLoading ? true : false}
                  />
                );
              }

              //By default it is loading the result so just return loading...
              return <Text>Loading...</Text>;
            }}
          </Mutation>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  LoginLoading: state.recipes.LoginLoading,
  error: state.recipes.error
});

export default connect(
  mapStateToProps,
  { UserLogin }
)(LoginForm);
