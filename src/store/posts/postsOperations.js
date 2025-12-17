import { createAsyncThunk } from "@reduxjs/toolkit";
import * as postApi from "../../shared/api/posts-api";

// Отримати всі пости всіх користувачів
export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState(); 
      const data = await postApi.getPosts(auth.accessToken); 
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Створення поста
export const createPost = createAsyncThunk(
  "posts/create",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await postApi.createPost(formData);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Отримати пост по id
export const fetchPostById = createAsyncThunk(
  "posts/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await postApi.getPostById(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Оновити пост
export const updatePost = createAsyncThunk(
  "posts/update",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const data = await postApi.updatePost(id, payload);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Видалити пост
export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id, { rejectWithValue }) => {
    try {
      const data = await postApi.deletePost(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
