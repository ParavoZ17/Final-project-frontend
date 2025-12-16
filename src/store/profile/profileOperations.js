import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApi from "../../shared/api/user-api";

export const getUserByUsername = createAsyncThunk(
  "profile/getUserByUsername",
  async (username, { rejectWithValue }) => {
    try {
      return await userApi.getUser(username);
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || error.message
      );
    }
  }
);
