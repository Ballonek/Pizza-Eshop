import { combineReducers } from 'redux';

import userReducer from './userReducer';
import errorReducer from './errorReducer';
import recipesReducer from './recipesReducer';
import recipeReducer from './recipeReducer';
import favoriteRecipesReducer from './favoriteRecipesReducer';

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    favoriteRecipes: favoriteRecipesReducer
})