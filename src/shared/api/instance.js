
import axios from "axios";
import { refreshUser } from "../../store/auth/authOperations.js";


const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === "accessToken expired"
    ) {
      const { store } = await import("../../store/store.js");

      const result = await store.dispatch(refreshUser());


      if (refreshUser.fulfilled.match(result)) {
        originalRequest.headers["Authorization"] =
          "Bearer " + result.payload.accessToken;
        
        return instance(originalRequest);
      }


      return Promise.reject(result.payload);
    }

    return Promise.reject(error);
  }
);


export default instance;

