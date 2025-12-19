import { createSlice } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  refreshUser,
} from "./authOperations";

import instance from "../../shared/api/instance";

const initialState = {
  user: null,
  loading: false,
  error: null,
  accessToken: null,
  refreshToken: null,
  isRegisterSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthUser(state, action) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    resetRegisterSuccess(state) {
      state.isRegisterSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.isRegisterSuccess = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        instance.defaults.headers["Authorization"] = `Bearer ${payload.accessToken}`;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
      });

    builder
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        instance.defaults.headers["Authorization"] = `Bearer ${payload.accessToken}`;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
      });
  },
});

export const { updateAuthUser, resetRegisterSuccess } = authSlice.actions;
export default authSlice.reducer;
