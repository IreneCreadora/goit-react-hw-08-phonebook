import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//  POST
//  '/users/signup'

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  POST
// '/users/login'

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  POST
//  '/users/logout'

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//  GET
//  '/users/current'

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await axios('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
