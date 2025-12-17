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

export const getIsFollowingUser = createAsyncThunk(
  "user/isFollowing",
  async (userId, {rejectWithValue}) => {
    try {
      return await userApi.getIsFollowing(userId);

    } catch (error) {
      return rejectWithValue({
        email: error?.response?.data.message || error?.message
      });
    }
  }
);

export const followUser = createAsyncThunk(
  "user/follow",
  async (userId, {rejectWithValue}) => {
    try {
      return await userApi.follow(userId);

    } catch (error) {
      return rejectWithValue({
        email: error?.response?.data.message || error?.message
      });
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "user/unFollow",
  async (userId, {rejectWithValue}) => {
    try {
      return await userApi.unFollow(userId);

    } catch (error) {
      return rejectWithValue({
        email: error?.response?.data.message || error?.message
      });
    }
  }
);