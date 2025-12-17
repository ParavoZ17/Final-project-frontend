import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllPosts,
  createPost,
  fetchPostById,
  updatePost,
  deletePost,
} from "./postsOperations";

const initialState = {
  posts: [],
  selectedPost: null, // для модалки
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    openPostModal: (state, action) => {
      state.selectedPost = action.payload;
    },
    closePostModal: (state) => {
      state.selectedPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // CREATE POST
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts.unshift(payload);
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // FETCH ALL POSTS
      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(fetchAllPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // FETCH POST BY ID
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.selectedPost = payload;
      })
      .addCase(fetchPostById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // UPDATE POST
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        const index = state.posts.findIndex((p) => p._id === payload._id);
        if (index !== -1) state.posts[index] = payload;
        if (state.selectedPost?._id === payload._id) state.selectedPost = payload;
      })

      // DELETE POST
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.posts = state.posts.filter((p) => p._id !== payload._id);
        if (state.selectedPost?._id === payload._id) state.selectedPost = null;
      });
  },
});

export const { openPostModal, closePostModal } = postsSlice.actions;

export default postsSlice.reducer;
