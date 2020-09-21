import axios from 'axios';
import {tokenConfig} from './userActions'

import {
    FOODS_LOADED,
    FOODS_LOADING,
    FOOD_DELETE,
    FOOD_DELETE_SUCCESS,
    FOOD_DELETE_ERROR,
    FOOD_CREATE
} from './types';

// Check token & load user
export const loadFoods = () => async dispatch => {
    dispatch({ type: FOODS_LOADING });
    
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
  try {
      const res = await axios.get('/api/foods/', config);

      dispatch({
          type: FOODS_LOADED,
          payload: res.data
      });
  } catch (error) {
    
  }

};

// Check token & load user
export const createFood = (food) => async (dispatch, getState) => {
    const config = tokenConfig(getState);    
    dispatch({type: FOODS_LOADING })

    try {
        const res = await axios.post('/api/foods/', food, config);

        dispatch({
            type: FOOD_CREATE,
            payload: res.data
        })

    } catch (error) {
        
    }

};


// Check token & load user
export const deleteFood = (id) => async (dispatch, getState) => {
    const config = tokenConfig(getState);    
    dispatch({type: FOODS_LOADING })

    try {
        const res = await axios.delete(`/api/foods/${id}`, config);

        dispatch({
            type: FOOD_DELETE_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: FOOD_DELETE_ERROR
        })
    }

};