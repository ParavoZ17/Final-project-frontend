// instance.js
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // ⚠️ Обрати внимание: правильная проверка ошибки
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === "accessToken expired"
    ) {
      // ленивый импорт store, чтобы не создавать цикл при загрузке модулей
      const { store } = await import("../../store/store.js");
      const { auth } = store.getState();

      const { data } = await instance.post("/auth/refresh", {
        refreshToken: auth.refreshToken,
      });

      instance.defaults.headers["Authorization"] = `Bearer ${data.accessToken}`;
      return instance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default instance;
