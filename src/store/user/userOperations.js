import {createAsyncThunk} from "@reduxjs/toolkit";
import * as userApi from "../../shared/api/user-api";

export const getUserByUsername = createAsyncThunk(
  "user/username",
  async (username, {rejectWithValue}) => {
    try {
      return await userApi.getUser(username);

    } catch (error) {
      return rejectWithValue({
        email: error?.response?.data.message || error?.message
      });
    }
  }
);

export const uploadUserAvatar = createAsyncThunk(
  "user/uploadAvatar",
  async (username, {rejectWithValue}) => {
    try {
      return await userApi.uploadAvatar(username);

    } catch (error) {
      return rejectWithValue({
        email: error?.response?.data.message || error?.message
      });
    }
  }
);

export const updateAuthUserProfile = createAsyncThunk(
  "user/updateUser",
  async (username, {rejectWithValue}) => {
    try {
      return await userApi.updateMe(username);

    } catch (error) {
      return rejectWithValue({
        email: error?.response?.data.message || error?.message
      });
    }
  }
);