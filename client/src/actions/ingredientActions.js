import axios from 'axios';
import {tokenConfig} from './userActions'

import {
    INGREDIENTS_ERROR,
    INGREDIENTS_LOADED,
    INGREDIENTS_LOADING,
    INGREDIENT_CREATE,
    INGREDIENT_UPDATE,
    INGREDIENT_DELETE
} from './types';

// Check token & load user
export const loadIngredients = () => async dispatch => {
    dispatch({ type: INGREDIENTS_LOADING });
    
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    try {
        const res = await axios.get('/api/ingredients', config);
        dispatch({
            type: INGREDIENTS_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: INGREDIENTS_ERROR,
            payload: error.response.data
        });
    };
};

export const createIngredient = (ingredient) => async (dispatch, getState) => {
    const config = tokenConfig(getState);    

    try {
        const res = await axios.post('/api/ingredients', ingredient, config);
        dispatch({
            type: INGREDIENT_CREATE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: INGREDIENTS_ERROR,
            payload: error.response.data
        });
    }
}

export const updateIngredient = (ingredient, id) => async (dispatch, getState) => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    try {
        await axios.patch(`/api/ingredients/${id}`, ingredient, config);
        let ingredients = getState().ingredients.ingredients;
        const ingredientIndex = ingredients.findIndex((ingredient) => ingredient._id === id);

        ingredients[ingredientIndex] = { ...ingredients[ingredientIndex], name: ingredient.name, price: ingredient.price }; 
        dispatch({
            type: INGREDIENT_UPDATE,
            payload: ingredients
        })


    } catch (error) {
        dispatch({
            type: INGREDIENTS_ERROR,
            payload: error.data
        });
    }
}

// Check token & load user
export const deleteIngredient = (id) => async (dispatch, getState) => {
    const config = tokenConfig(getState);    
    const ingredients = getState().ingredients.ingredients.filter((ingredient => ingredient._id !== id));

    try {
        await axios.delete(`/api/ingredients/${id}`, config);

        dispatch({
            type: INGREDIENT_DELETE,
            payload: ingredients
        })

    } catch (error) {
        dispatch({
            type: INGREDIENTS_ERROR,
            payload: error.response.data
        })
    }

};