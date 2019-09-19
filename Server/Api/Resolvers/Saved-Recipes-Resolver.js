import User from "../../Models/user";

import { requireAuth } from "../../services/auth";

export default {
  CreateSavedRecipe: async (_, { inputs }, { user }) => {
    try {
      await requireAuth(user);
      const recipe = {
        ...inputs
      };

      const FindUser = await User.findById(user._id);
      FindUser.SavedRecipes.unshift(recipe);
      FindUser.save();
      return recipe;
    } catch (error) {
      throw error;
    }
  },

  deleteSavedRecipe: async (_, { id }, { user }) => {
    try {
      await requireAuth(user);

      const FindUser = await User.findById(user._id);
      const Arr = await FindUser.SavedRecipes;
      const Re = await Arr.map(x => {
        return x.id;
      }).indexOf(id);

      if (!Re) {
        throw new Error("Not found!");
      }

      Arr.splice(Re, 1);

      await FindUser.save();

      return true;
    } catch (err) {
      throw err;
    }
  },

  getSavedRecipes: async (_, args, { user }) => {
    try {
      await requireAuth(user);

      const FindUser = await User.findById(user._id);
      const Recipes = await FindUser.SavedRecipes;
      return Recipes;
    } catch (error) {
      throw error;
    }
  }
};
