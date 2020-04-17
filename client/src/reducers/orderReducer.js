import {
    ORDERS_LOADED,
    ORDERS_LOADING,
    ORDER_CREATE,
    ORDER_ADD_FOOD
} from '../actions/types';

const initialState = {
    isLoading: false,
    food: [{
        _id: '',
        number: 0,
        foodAmount: 0,
        name: '',
        foodPrice: 0
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
                food: action.payload.food,
                orderPrice: action.payload.orderPrice,
                orderAmount: action.payload.orderAmount
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