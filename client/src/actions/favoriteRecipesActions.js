import {
    FAVORITE_RECIPES_LOADED,
    FAVORITE_RECIPES_ERROR,
    FAVORITE_RECIPES_LOADING,
    ADD_FAVORITE_RECIPE,
    REMOVE_FAVORITE_RECIPE
} from '../actions/types'
import {tokenConfig} from './userActions';
import axios from 'axios';

export const loadFavoriteRecipes = () => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_RECIPES_LOADING
    })
    const favoriteRecipes = getState().user.user.favoriteRecipes;

    dispatch({
        type: FAVORITE_RECIPES_LOADED,
        payload: favoriteRecipes
    })
}

export const addToFavoriteRecipes = () => async (dispatch, getState) => {
    const body = {
        id: getState().recipe.recipe.id,
        title: getState().recipe.recipe.title,
        image: getState().recipe.recipe.image
    }

    try {
        const res = await axios.post('/api/users/me/recipes', body, tokenConfig(getState));
        dispatch({
            type: ADD_FAVORITE_RECIPE,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FAVORITE_RECIPES_ERROR,
            payload: error.response.message
        })
    }
}

export const removeFromFavoriteRecipes = (id) => async (dispatch,getState) => {
    try {
        const res = await axios.delete(`/api/users/me/recipes/${id}`, tokenConfig(getState));
        dispatch({
            type: REMOVE_FAVORITE_RECIPE,
            payload: res.data.favoriteRecipes
        })
    } catch (error) {
        dispatch({
            type: FAVORITE_RECIPES_ERROR,
            payload: error.response.message
        })
    }
}