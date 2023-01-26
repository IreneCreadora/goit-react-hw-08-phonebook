import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const handlePending = state => {
  state.authIsLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.authError = payload;
  state.authIsLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    authIsLoading: false,
    authError: null,
  },

  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.authIsLoading = false;
        state.authError = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.authError = payload;
        state.authIsLoading = false;
      })
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.authIsLoading = false;
        state.authError = null;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.authError = null;
        state.authIsLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.authIsLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.authError = null;
        state.authIsLoading = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.authError = payload;
        state.isRefreshing = false;
        state.authIsLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
