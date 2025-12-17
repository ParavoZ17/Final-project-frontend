import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/api/notifications-api";


export const getNotifications = createAsyncThunk(
  "notifications/getAll",
  async (_, { rejectWithValue,getState }) => {
    try {
        const { auth } = getState();
      const { data } = await api.fetchNotifications(_,_,auth.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Fetch failed");
    }
  }
);


export const readNotification = createAsyncThunk(
  "notifications/read",
  async (notificationId, { rejectWithValue, getState }) => {
    try {
        const { auth } = getState();
      const { data } = await api.markNotificationRead(notificationId, auth.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Update failed");
    }
  }
);
