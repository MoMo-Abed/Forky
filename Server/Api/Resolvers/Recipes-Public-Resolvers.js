import axios from "axios";
import Keys from "../../Config/constants";

export default {
  Recipes: async (_, { value }) => {
    const Arr = [];
    try {
      const getRec = await axios.get(
        `https://api.edamam.com/search?q=${value}&app_id=0f19eb37&app_key=${Keys.EdamamApi}&to=20`
      );
      const RecData = await getRec.data.hits.map(Res => {
        Arr.push({ ...Res.recipe });
      });
      return Arr;
    } catch (error) {
      throw error;
    }
  }
};
