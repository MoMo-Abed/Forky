import {
  SIGNUPUSER,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGNUPUSER_FAIL,
  SIGNUPUSER_SUCCESS,
  GET_RECIPES,
  GET_RECIPE_ING,
  DELETE_LOVED_RECIPES,
  REMOVE_FROM_SHOPPING_LIST,
  ADD_TO_SHOPPING_LIST,
  LOVED_RECIPES_TO_INGPAGE,
  SHOPPINGLIST_TO_ITEMLIST,
  SIGN_OUT,
  LOVED_RECIPES_FETCH,
  SHOPPINGLIST_FETCH,
  FETCH_PROFILE,
  RECIPE_VALUE
} from "../actions/types";

const initialState = {
  user: null,
  error: null,
  signUpLoading: false,
  LoginLoading: false,
  Recipes: {},
  RecipeIng: {
    label: "shaved asparagus pizza",
    image: "https://www.edamam.com/web-im…42775.jpg",
    uri: "http://www.edamam.com/ontolog…240898fbc",
    url: "https://smittenkitchen.com/20…us-pizza/",
    shareAs: "http://www.edamam.com/recipe/…fbc/pizza",
    source: "Smitten Kitchen",
    yield: "8",
    healthLabels: ["Sugar-Conscious", "Vegetarian…hol-Free"],
    dietLabels: [],
    cautions: ["Sulfites"],
    ingredients: [{ text: "1 recipe Really Simple…edients" }],
    ingredientLines: ["1 recipe Really Simple Pizza…y sliced"],
    calories: 1542.4927920000002,
    totalWeight: 735.3423700000001,
    totalTime: 0,
    totalNutrients: {
      FAT: { label: "Fat", quantity: "75" },
      CHOCDF: { label: "Fat", quantity: "75" },
      PROCNT: { label: "Fat", quantity: "75" }
    },
    _id: null
  },
  LovedRecipes: [],
  ShoppingList: [],
  ShoppingToItem: [],
  Profile: null,
  RecipeV: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    /** login user */

    case LOGIN_USER:
      return { ...state, LoginLoading: true, error: "" };

    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, LoginLoading: false };

    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication Failed.", LoginLoading: false };

    /** SIGNOUT USER */

    case SIGN_OUT:
      return initialState;

    /** Signup user */

    case SIGNUPUSER:
      return { ...state, signUpLoading: true, error: "" };

    case SIGNUPUSER_SUCCESS:
      return { ...state, user: action.payload, signUpLoading: false };

    case SIGNUPUSER_FAIL:
      return {
        ...state,
        error: "Authentication Failed.",
        signUpLoading: false
      };
    /** for recipes */

    case RECIPE_VALUE:
      return { ...state, RecipeV: action.payload };

    case GET_RECIPE_ING:
      return { ...state, RecipeIng: action.payload };

    case LOVED_RECIPES_FETCH:
      return {
        ...state,
        LovedRecipes: action.payload
      };

    case DELETE_LOVED_RECIPES:
      return {
        ...state,

        LovedRecipes: state.LovedRecipes.filter(
          (taLovedRecipes, index) => index !== action.payload
        )
      };

    case LOVED_RECIPES_TO_INGPAGE:
      return {
        ...state,
        RecipeIng: action.payload
      };

    case SHOPPINGLIST_FETCH:
      return {
        ...state,
        ShoppingList: action.payload
      };

    case REMOVE_FROM_SHOPPING_LIST:
      return {
        ...state,
        ShoppingList: state.ShoppingList.filter(
          (ShoppingList, index) => index !== action.payload
        )
      };

    case SHOPPINGLIST_TO_ITEMLIST:
      return {
        ...state,
        ShoppingToItem: action.payload
      };

    case FETCH_PROFILE:
      return {
        ...state,
        Profile: action.payload
      };

    default:
      return state;
  }
}
