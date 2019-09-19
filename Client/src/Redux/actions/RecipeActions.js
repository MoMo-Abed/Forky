import {
  SIGNUPUSER,
  LOGIN_USER,
  REST_PASSWORD_FAIL,
  REST_PASSWORD_SUCC,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGNUPUSER_FAIL,
  SIGNUPUSER_SUCCESS,
  REST_PASSWORD,
  GET_RECIPES,
  GET_RECIPE_ING,
  LOVED_RECIPES,
  DELETE_LOVED_RECIPES,
  ADD_TO_SHOPPING_LIST,
  REMOVE_FROM_SHOPPING_LIST,
  LOVED_RECIPES_TO_INGPAGE,
  SHOPPINGLIST_TO_ITEMLIST,
  SIGN_OUT,
  LOVED_RECIPES_FETCH,
  SHOPPINGLIST_FETCH,
  UPDATE_PROFILE,
  FETCH_PROFILE,
  SIGNUPLOGINSUCC,
  RECIPE_VALUE
} from "./types";
import { Actions } from "react-native-router-flux";
import axios from "axios";

//const api_key = '94288c6d41dd2f10c8f3b45ce4a2c3cf';
//const api_key = '24efe19ec159741df207dfbe5a29451c';
const api_key = "a21e46c6ab81bccebfdfa66f0c4bf5e9";
//const api_key = '283180c15736bec00530ec79024f48a2';

/** for login user */

export function UserLogin({ loginemail, loginpassword }) {
  return function(dispatch) {};
}

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

/** FOR SIGNOUT USER */

export function SignOut() {
  return function(dispatch) {};
}

/** for signup user */

export function UserSignUp({ SignUpEmail, SignUpPassword }) {
  return function(dispatch) {};
}

const SignUpUserFail = dispatch => {
  dispatch({ type: SIGNUPUSER_FAIL });
};

const SignUploginUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUPLOGINSUCC,
    payload: user
  });

  Actions.UpdateProfile();
};

/** rest password */

export function RestPassword({ RestEmail }) {
  return function(dispatch) {
    dispatch({ type: REST_PASSWORD });
  };
}

const RestFail = dispatch => {
  dispatch({ type: REST_PASSWORD_FAIL });
};

const RestSucc = (dispatch, user) => {
  dispatch({
    type: REST_PASSWORD_SUCC,
    payload: user
  });

  Actions.login();
};

/** FOR RECIPES */

export function RecipeValue(value) {
  return {
    type: RECIPE_VALUE,
    payload: value
  };
}

/** get recipeIng */

export function GetRecipeIng(state) {
  return {
    type: GET_RECIPE_ING,
    payload: state
  };
}

/** for Loved Recipes */

export function LovedRecipe(state) {
  return {
    type: LOVED_RECIPES,
    payload: state
  };
}

export function DeleteLovedRecipe(id) {
  return () => {};
}

export function FavToIng(state) {
  return {
    type: LOVED_RECIPES_TO_INGPAGE,
    payload: state
  };
}

export const FetchLovedRecipe = () => {
  return dispatch => {};
};

/** for Add Ing to shopping  */

export function AddToShoppingList(state) {
  return {
    type: ADD_TO_SHOPPING_LIST,
    payload: state
  };
}

export function DeleteFromShoppingList(id) {
  return () => {};
}

export function ShoppingToItem(state) {
  return {
    type: SHOPPINGLIST_TO_ITEMLIST,
    payload: state
  };
}

export const FetchShoppingList = () => {
  return dispatch => {};
};

/** FOR PROFILE */

export function ProfileUpdate({ image, name, uid }) {
  return () => {};
}

export const FetchProfile = () => {
  return dispatch => {};
};
