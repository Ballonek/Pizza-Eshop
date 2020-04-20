import { combineReducers } from 'redux';

import userReducer from './userReducer';
import errorReducer from './errorReducer';
import foodReducer from './foodReducer';
import orderReducer from './orderReducer';
import ingredientReducer from './ingredientReducer';

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    foods: foodReducer,
    order: orderReducer,
    ingredients: ingredientReducer
});