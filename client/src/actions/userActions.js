import axios from 'axios';
import { returnErrors, clearsErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

// Check token & load user
export const loadUser = () => async (dispatch, getState) => {
  if (getState().user.isAuthenticated) { 
    dispatch({
      type: USER_LOADED,
      payload: getState().user.user
    })
  }
  // User loading
  dispatch({ type: USER_LOADING });


  try {

    if (!getState().user.token) {
      throw Error("No token provided")
    }
    const res = await axios.get('/api/users/me', tokenConfig(getState));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
    clearsErrors();
  } catch (error) {
    dispatch(returnErrors({ msg: error.message}), 401);
    dispatch({
      type: AUTH_ERROR,
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
    clearsErrors();
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.message
    });
  }
};

// Login User
export const loginUser = ({ email, password }) => async dispatch => {
  const user = { email, password };

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  const body = JSON.stringify(user);
  try {
    const res = await axios.post('/api/users/login', body, config);
    dispatch(clearsErrors());
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    clearsErrors();
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.message
    });
  }

};


// Logout User
export const logoutUser = () => async (dispatch, getState) => {

  try {
      const res = await axios.post('/api/users/me/logout','' ,tokenConfig(getState));
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
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