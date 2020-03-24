import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
} from './types';

// Check token & load user
export const loadUser = () => async (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get('/api/users/me', tokenConfig(getState));

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({
      type: AUTH_ERROR
    });
  }

};

// Register User
export const registerUser = (user) => async dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  const body = JSON.stringify(user);
  try {
    const res = await axios.post('/api/users/', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.message
    });
  }
};

// Login User
export const loginUser = ({ email, password }) => dispatch => {
  // Headers
};


// Logout User
export const logoutUser = () => async dispatch => {
  
};


// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage

  const token = getState().user.token;
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
};