import axios from 'axios';

import {
    FOODS_LOADED,
    FOODS_LOADING
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