import axios from 'axios';

import {
    RECIPE_LOADING,
    RECIPE_ERROR,
    RECIPE_LOADED
} from './types';

export const loadRecipe = (id) => async dispatch => {
    dispatch(setRecipeLoading());
    const config = {
        headers: {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "96b3a48c06mshb7e8dc8e804f43dp16573ajsnd221a742bc6a"
        }
    }

    try {
        const res = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, config);

        await dispatch({
            type: RECIPE_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: RECIPE_ERROR,
            payload: error.response.data
        })
    }
}

export const setRecipeLoading = () => {
    return {
        type: RECIPE_LOADING
    };
};