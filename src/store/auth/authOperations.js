import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../shared/api/auth-api";
import instance from "../../shared/api/instance";
import {
  toastSuccess,
  toastError,
  toastInfo,
} from "../../shared/utils/toast";


export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await authApi.register(payload);

      toastSuccess("Реєстрація успішна 🎉");
      return data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || "Помилка реєстрації";

      toastError(message);

      return rejectWithValue({
        email: message,
      });
    }
  }
);


export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await authApi.login(payload);

      toastSuccess("Ви успішно увійшли 👋");
      return data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Невірний email або пароль";

      toastError(message);

      return rejectWithValue({
        email: message,
      });
    }
  }
);


export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.accessToken;

      await authApi.logout(token);

      toastInfo("Ви вийшли з акаунту");
      return true;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || "Помилка logout";

      toastError(message);
      return rejectWithValue(message);
    }
  }
);


export const getCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await authApi.getCurrent(auth.accessToken);
      return data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || "Unauthorized";

      return rejectWithValue({
        email: message,
      });
    }
  }
);


export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();

      if (!auth.refreshToken) {
        return rejectWithValue("No refresh token in state");
      }

      const { data } = await instance.post("/auth/refresh", {
        refreshToken: auth.refreshToken,
      });

      return data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Session expired";

      toastError(message);
      return rejectWithValue(message);
    }
  }
);
