import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as operations from "./commentsOperations";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async ({ postId, token }) => operations.getComments(postId, token)()
);

export const addNewComment = createAsyncThunk(
  "comments/addComment",
  async ({ postId, content, token }) => operations.addComment(postId, content, token)()
);

export const removeComment = createAsyncThunk(
  "comments/removeComment",
  async ({ postId, commentId, token }) => operations.deleteComment(postId, commentId, token)()
);

export const toggleLikeComment = createAsyncThunk(
  "comments/toggleLike",
  async ({ commentId, token }) => operations.toggleCommentLike(commentId, token)()
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch comments
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add comment
      .addCase(addNewComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.unshift(action.payload);
      })
      .addCase(addNewComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Remove comment
      .addCase(removeComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = state.comments.filter(c => c.id !== action.meta.arg.commentId);
      })
      .addCase(removeComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Toggle like
      .addCase(toggleLikeComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleLikeComment.fulfilled, (state, action) => {
        state.loading = false;
        const comment = state.comments.find(c => c.id === action.meta.arg.commentId);
        if (comment) comment.userLiked = action.payload.liked;
      })
      .addCase(toggleLikeComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
