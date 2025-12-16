import { createSlice } from "@reduxjs/toolkit";
import {
  getUserByUsername,
  uploadUserAvatar,
  updateAuthUserProfile,
} from "./userOperations";

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      state.profile = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // ===== GET USER =====
      .addCase(getUserByUsername.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(getUserByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ===== UPLOAD AVATAR =====
      .addCase(uploadUserAvatar.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile.avatar = action.payload.avatar;
        }
      })

      // ===== UPDATE PROFILE =====
      .addCase(updateAuthUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
