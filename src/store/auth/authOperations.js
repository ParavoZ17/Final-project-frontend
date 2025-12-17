import { createAsyncThunk } from "@reduxjs/toolkit";

import * as authApi from "../../shared/api/auth-api";
import instance from "../../shared/api/instance";

export const registerUser = createAsyncThunk(
    "register",
    async(payload, {rejectWithValue}) => {
        try {
            const data = await authApi.register(payload);
            return data;
        }
        catch(error) {
            return rejectWithValue({
                email: error?.response?.data.message || error?.message
            });
        }
    }
)

export const loginUser = createAsyncThunk(
    "login",
    async(payload, {rejectWithValue}) => {
        try {
            const data = await authApi.login(payload);
            return data;
        }
        catch(error) {
            return rejectWithValue({
                email: error?.response?.data.message || error?.message
            });
        }
    }
)

export const logoutUser = createAsyncThunk(
  "logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.accessToken; 
      await authApi.logout(token);
      return true;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message
      );
    }
  }
);


export const getCurrentUser = createAsyncThunk(
    "current",
    async(_, {rejectWithValue, getState}) => {
        try {
          
            const {auth} = getState();
          
            const data = await authApi.getCurrent(auth.accessToken)
            return data;
        }
        catch(error) {
            return rejectWithValue({
                email: error?.response?.data.message || error?.message
            });
        }
    }
)

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      if (!auth.refreshToken) {
        return rejectWithValue("No refresh token in state");
      }
      
      const { data } = await instance.post("/auth/refresh", {
        refreshToken: auth.refreshToken, 
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


