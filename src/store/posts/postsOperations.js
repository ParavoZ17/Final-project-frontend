import {createAsyncThunk} from "@reduxjs/toolkit";
import * as postApi from "../../shared/api/posts-api";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, {rejectWithValue, getState}) => {
    try {
      const {auth} = getState();
      const data = await postApi.getPosts(auth.accessToken);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/create",
  async (formData, {rejectWithValue}) => {
    try {
      const data = await postApi.createPost(formData);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchById",
  async (id, {rejectWithValue}) => {
    try {
      const data = await postApi.getPostById(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/update",
  async ({id, payload}, {rejectWithValue}) => {
    try {
      const data = await postApi.updatePost(id, payload);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id, {rejectWithValue}) => {
    try {
      const data = await postApi.deletePost(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const toggleLike = createAsyncThunk(
  "posts/like",
  async (id, {rejectWithValue}) => {
    try {
      return await postApi.like(id);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);