import {
    ORDER_CREATE,
    ORDER_ADD_FOOD
} from '../actions/types';

const initialState = {
    isLoading: false,
    foods: [{
        food: {},
        foodAmount: 0,
    }],
    orderPrice: 0,
    orderAmount: 0,
    firstname: '',
    lastname: '',
    email: '',
    finalOrder: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ORDER_ADD_FOOD: 
            return {
                ...state,
                foods: action.payload,
                orderAmount: action.amount,
                orderPrice: action.price
            }
        case ORDER_CREATE:
            return {
                ...state,
                finalOrder: action.payload
            }
        default:
            return state
    };
}