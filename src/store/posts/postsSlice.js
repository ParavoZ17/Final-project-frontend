import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// Створення поста
export const createPost = createAsyncThunk(
  "posts/create",
  async (formData, { rejectWithValue }) => {
    try {
      // Використовуємо axios instance, токен підставляється автоматично через інтерсептор
      const { data } = await instance.post("/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Отримати всі пости
export const fetchPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/posts");
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE POST
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts.unshift(payload); // додаємо новий пост на початок
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // FETCH POSTS
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default postsSlice.reducer;
