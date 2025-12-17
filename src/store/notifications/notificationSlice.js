import { createSlice } from "@reduxjs/toolkit";
import { getNotifications, readNotification } from "./notificationOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      // для socket.io
      state.items.unshift(action.payload);
    },
    clearNotifications: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      // GET
      .addCase(getNotifications.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // READ
      .addCase(readNotification.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.items.findIndex((n) => n.id === updated.id);
        if (idx !== -1) {
          state.items[idx].read = true;
        }
      }),
});

export const {
  addNotification,
  clearNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;
    