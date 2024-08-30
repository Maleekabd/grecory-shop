import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.error = false;
    },
    loginFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    Logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed, Logout } =
  authSlice.actions;

export default authSlice.reducer;
