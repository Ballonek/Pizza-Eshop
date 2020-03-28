import {
    FAVORITE_RECIPES_LOADED,
    FAVORITE_RECIPES_ERROR,
    FAVORITE_RECIPES_LOADING,
    ADD_FAVORITE_RECIPE,
    REMOVE_FAVORITE_RECIPE
} from '../actions/types'

const initialState = {
    favoriteRecipes: [],
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE_RECIPE:
            return {
                ...state,
                favoriteRecipes: action.payload
            };
        case REMOVE_FAVORITE_RECIPE:
            return {
                ...state,
                favoriteRecipes: action.payload
            }
        case FAVORITE_RECIPES_LOADING:
            return {
                ...state,
                loading: true
            };
        case FAVORITE_RECIPES_LOADED:
            return {
                ...state,
                favoriteRecipes: action.payload,
                loading: false
            };
        case FAVORITE_RECIPES_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}