import { combineReducers } from 'redux';

import RecipeReduce from './RecipeReducer';


export default combineReducers({
    recipes: RecipeReduce
});
