import { combineReducers } from 'redux';

import userReducer from './userReducer';
import errorReducer from './errorReducer';
import foodReducer from './foodReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    foods: foodReducer,
    order: orderReducer
});