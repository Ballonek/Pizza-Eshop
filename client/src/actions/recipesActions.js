import axios from 'axios';

import {
    RECIPES_LOADING,
    RECIPES_ERROR,
    RECIPES_LOADED
} from './types';

export const loadRecipes = () => async dispatch => {
    dispatch(setRecipesLoading());
    
    const config = {
        headers: {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "96b3a48c06mshb7e8dc8e804f43dp16573ajsnd221a742bc6a"
        }
    }
    try {
        const res = await axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=5', config)
        dispatch({
            type: RECIPES_LOADED,
            payload: res.data.recipes
        })  
    } catch (error) {
        dispatch({
            type: RECIPES_ERROR,
            payload: error.response.data
        })
    }


}

export const setRecipesLoading = () => {
    return {
        type: RECIPES_LOADING,
    };
};