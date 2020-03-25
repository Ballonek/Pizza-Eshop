import {
    RECIPE_LOADED,
    RECIPE_ERROR,
    RECIPE_LOADING
} from '../actions/types'

const initialState = {
    recipe: {},
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECIPE_LOADING:
            return {
                ...state,
                loading: true
            };
        case RECIPE_LOADED:
            return {
                ...state,
                loading: false,
                recipe: action.payload
            }
        case RECIPE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}