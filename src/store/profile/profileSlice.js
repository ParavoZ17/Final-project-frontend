import { createSlice } from "@reduxjs/toolkit";
import { getUserByUsername } from "./profileOperations";

const initialState = {
  user: null,
  posts: [],
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile(state) {
      state.user = null;
      state.posts = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByUsername.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          fullname: action.payload.fullname,
          bio: action.payload.bio,
          avatar: action.payload.avatar,
          website: action.payload.website,
          postsCount: action.payload.postsCount,
          followersCount: action.payload.followersCount,
          followingCount: action.payload.followingCount,
        };
        state.posts = action.payload.posts || [];
      })
      .addCase(getUserByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to load profile";
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
