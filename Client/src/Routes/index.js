import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Scene, Router, Stack, Actions } from "react-native-router-flux";
import LoginForm from "../components/auth pages/LoginForm";
import SignUpForm from "../components/auth pages/SignUpForm";
import RestPasswordUser from "../components/auth pages/RestPassword";
import IngRecipePage from "../components/IngPage/IngRecipePage";
import FavRecipeMain from "../components/FavouriteRecipes/FavRecipeMain";
import ShoppingMainView from "../components/ShoppingListPage/ShoppingMainView";
import ShoppingListItems from "../components/ShoppingListPage/ShoppingListItems";
import MainPage from "../components/MainRecipe";
import profilemainView from "../components/ProfilePage/profilemainView";
import UpdateProfile from "../components/auth pages/UpdateProfile";

import { getToken } from "../Utils/Auth";

export default class Routes extends Component {
  componentDidMount() {
    let token = getToken();
    console.log(token);
    if (token) {
      return Actions.main();
    } else {
      return Actions.auth();
    }
  }

  render() {
    const PageIcon = ({ title, focused, iconName }) => {
      return (
        <View>
          <Icon
            size={20}
            name={iconName}
            style={{ color: focused ? "#2DC268" : "gray", textAlign: "center" }}
          />
          <Text
            style={{
              color: focused ? "#2DC268" : "gray",
              textAlign: "center",
              marginLeft: 10
            }}
          >
            {title}
          </Text>
        </View>
      );
    };

    return (
      <Router>
        <Stack>
          <Scene key="auth" initial hideNavBar>
            <Scene key="login" hideNavBar component={LoginForm} />
            <Scene key="signup" hideNavBar component={SignUpForm} />
            <Scene
              key="RestPasswordUser"
              hideNavBar
              component={RestPasswordUser}
            />
            <Scene key="UpdateProfile" hideNavBar component={UpdateProfile} />
          </Scene>

          <Scene hideNavBar showLabel={false} tabs key="main">
            <Scene
              key="recipecard"
              iconName="file"
              title="Recipes"
              icon={PageIcon}
              hideNavBar
              component={MainPage}
            />

            <Scene
              key="favRecipePage"
              iconName="heart"
              title="Favorite"
              icon={PageIcon}
              hideNavBar
              component={FavRecipeMain}
            />

            <Scene
              key="shoppinglistpage"
              iconName="shopping-cart"
              title="Shoplist"
              icon={PageIcon}
              hideNavBar
              component={ShoppingMainView}
            />

            <Scene
              key="ProfilePage"
              iconName="user"
              title="Profile"
              icon={PageIcon}
              hideNavBar
              component={profilemainView}
            />
          </Scene>

          <Scene key="IngPage" hideTabBar hideNavBar>
            <Scene
              key="ingfullpage"
              initial
              hideTabBar
              hideNavBar
              hideNavBar
              component={IngRecipePage}
            />
          </Scene>

          <Scene key="ItemPage" hideTabBar hideNavBar>
            <Scene
              key="itemListPage"
              initial
              hideTabBar
              hideNavBar
              hideNavBar
              component={ShoppingListItems}
            />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
