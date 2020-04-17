import {
    FOODS_LOADED,
    FOODS_LOADING
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
        default:
            return state
    };
}