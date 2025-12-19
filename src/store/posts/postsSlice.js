import {createSlice} from "@reduxjs/toolkit";
import {
  fetchAllPosts,
  createPost,
  fetchPostById,
  updatePost,
  deletePost,
} from "./postsOperations";

const initialState = {
  posts: [],
  selectedPost: null,
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
    updatePostLike: (state, {payload}) => {
      const post = state.posts.find(p => p.id === payload?.post?.id);
      if (post) {
        post.likesCount = payload?.likesResponse?.likesCount;
        post.userLiked = payload?.likesResponse?.liked;
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.posts.unshift(payload);
      })
      .addCase(createPost.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPosts.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(fetchAllPosts.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostById.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.selectedPost = payload;
      })
      .addCase(fetchPostById.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(updatePost.fulfilled, (state, {payload}) => {
        const index = state.posts.findIndex((p) => p._id === payload._id);
        if (index !== -1) state.posts[index] = payload;
        if (state.selectedPost?._id === payload._id) state.selectedPost = payload;
      })

      .addCase(deletePost.fulfilled, (state, {payload}) => {
        state.posts = state.posts.filter((p) => p._id !== payload._id);
        if (state.selectedPost?._id === payload._id) state.selectedPost = null;
      });
  },
});

export const {
  openPostModal,
  closePostModal,
  updatePostLike,
  setPosts,
} = postsSlice.actions;
export default postsSlice.reducer;