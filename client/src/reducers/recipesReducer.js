import {
    RECIPES_LOADED,
    RECIPES_ERROR,
    RECIPES_LOADING
} from '../actions/types'

const initialState = {
    recipes: [],
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECIPES_LOADING:
            return {
                ...state,
                loading: true
            };
        case RECIPES_LOADED:
            return {
                ...state,
                loading: false,
                recipes: action.payload
            }
        case RECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}