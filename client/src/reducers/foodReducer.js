import {
    FOODS_LOADED,
    FOODS_LOADING,
    FOOD_CREATE,
    FOOD_DELETE_SUCCESS
} from '../actions/types';

const initialState = {
    isLoading: false,
    foods: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FOODS_LOADING: 
            return {
            ...state,
            isLoading: true
            }
        case FOODS_LOADED:
            return {
                ...state,
                isLoading: false,
                foods: action.payload
            }
        case FOOD_CREATE:
            return {
                ...state,
                foods: [...state.foods, action.payload],
                isLoading: false
            }
        case FOOD_DELETE_SUCCESS:
            return {
                ...state
            }
        default:
            return state
    };
}