import { combineReducers } from 'redux';

import userReducer from './userReducer';
import errorReducer from './errorReducer';
import recipesReducer from './recipesReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    recipes: recipesReducer,
    recipe: recipeReducer
})