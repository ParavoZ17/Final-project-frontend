import {createAsyncThunk} from "@reduxjs/toolkit";
import * as userApi from "../../shared/api/user-api";

export const getUserByUsername = createAsyncThunk(
  "username",
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