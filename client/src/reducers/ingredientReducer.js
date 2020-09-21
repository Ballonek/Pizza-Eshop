import { INGREDIENTS_LOADING, INGREDIENTS_LOADED, INGREDIENTS_ERROR, INGREDIENT_CREATE, INGREDIENT_UPDATE, INGREDIENT_DELETE } from '../actions/types'

const initialState = {
    isLoading: false,
    ingredients: [],
    msg: null,
    loaded: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INGREDIENTS_LOADED:
            return {
                ...state,
                ingredients: action.payload,
                isLoading: false,
                loaded: true
            };
        case INGREDIENTS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case INGREDIENTS_ERROR:
            return {
                ...state,
                msg: action.payload,
                isLoading: false
            };
        case INGREDIENT_CREATE:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }; 
        case INGREDIENT_UPDATE:
            return {
            ...state,
            ingredients: action.payload
            }
        case INGREDIENT_DELETE:
            return {
            ...state,
            ingredients: action.payload
        }
        default:
            return state
    };
}