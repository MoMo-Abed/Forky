import Auth from "./Auth-resolvers";
import Recipe from "./Recipes-Public-Resolvers";
import SavedRecipes from "./Saved-Recipes-Resolver";

export default {
  RootQuery: {
    user: Auth.user,
    Recipes: Recipe.Recipes,
    getSavedRecipes: SavedRecipes.getSavedRecipes
  },
  RootMutation: {
    login: Auth.login,

    createUser: Auth.createUser,
    CreateSavedRecipe: SavedRecipes.CreateSavedRecipe,
    deleteSavedRecipe: SavedRecipes.deleteSavedRecipe
  }
};
